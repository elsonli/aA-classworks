class User < ApplicationRecord
  attr_reader :password

  validates :user_name, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    # Attempts to retrieve the user by their username from the database
    user = User.find_by(username: username)

    # Unless a corresponding user has been found, we can immediately return nil
    return nil unless user

    # We only want to return the user if the password is a match as well
    user if user.is_password?(password)
  end

  def ensure_session_token
    # Lazily assigns the session token if it has not already been set
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    # Force an update on the session token, which lazy assigning does not do
    self.session_token = SecureRandom::urlsafe_base64

    # We want to now attempt to save the instance to the database
    # In case of an error, we want this to fail loudly for debugging purposes
    self.save!

    # Return the session token so that it can be assigned to a variable
    self.session_token
  end

  def password=(password)
    # Sets a temporary instance variable to use for validation later
    @password = password

    # Sets the password digest to be a hash of the password using BCrypt
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    # Since the User's password digest is a String, we need to change this
    # back into a BCrypt object in order to have access to the is_password?
    # method, which we can compare to the argument passed in
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
