class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    # We need to first find the user by their credentials in the params
    @user = User.find_by_credentials(
      params[:user][:username], params[:user][:password]
    )
    
    # If a user has been found, then we want to reset their session token
    # and redirect them to the index page of the cats; otherwise, we will
    # show them the :new form again
    if @user
      session[:session_token] = @user.reset_session_token!
      redirect_to cats_url
    else
      render :new
    end
  end

  def destroy
    # If the current_user does not already exist, we attempt to lazy assign it
    # If no user is found, this will set @current_user to be nil
    # We want to reset the user's session token if there is a current_user
    @current_user.reset_session_token! if self.current_user

    # We want to also nullify the session token and the current user to logout
    session[:session_token] = nil
    @current_user = nil
  end
end
