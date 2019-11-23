class Cat < ApplicationRecord
  COLORS = [
    "black",
    "white",
    "gray",
    "hairless",
    "blue",
    "gold",
    "red",
    "rainbow",
    "pizza",
    "macandcheeseorange"
  ]
  
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: COLORS }
  validates :sex, inclusion: { in: ["M", "F"] }

  def age
    date = Date.today
    birth_date = self.birth_date
    year = date.year - birth_date.year
  end

  has_many :cat_rental_requests, dependent: :destroy
end
