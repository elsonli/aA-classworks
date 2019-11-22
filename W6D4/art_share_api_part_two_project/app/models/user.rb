class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  has_many :artworks, 
    dependent: :destroy,
    class_name: :Artwork, 
    primary_key: :id, 
    foreign_key: :artist_id

  has_many :artwork_shares,
    dependent: :destroy,
    class_name: :ArtworkShare, 
    primary_key: :id, 
    foreign_key: :viewer_id

  has_many :comments,
    dependent: :destroy,
    class_name: :Comment, 
    primary_key: :id, 
    foreign_key: :user_id

  has_many :shared_artworks, 
    through: :artwork_shares, 
    source: :artwork



end