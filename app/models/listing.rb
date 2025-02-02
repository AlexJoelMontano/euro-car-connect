class Listing < ApplicationRecord
  has_one_attached :image
  validates :title, :body, :url, presence: true
end
