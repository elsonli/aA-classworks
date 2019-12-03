class Sub < ApplicationRecord
  validates :title, :description, presence: true

  has_many :posts,
    foreign_key: :sub_id,
    class_name: :Post

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :post_subs,
    foreign_key: :sub_id,
    class_name: :PostSub
end
