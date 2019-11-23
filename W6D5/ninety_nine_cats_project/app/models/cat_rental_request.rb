class CatRentalRequest < ApplicationRecord
  validates :cat_id, :status, presence: true
  
  belongs_to :cat

  def overlapping_requests(requests)
    
  end
end
