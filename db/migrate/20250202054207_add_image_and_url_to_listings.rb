class AddImageAndUrlToListings < ActiveRecord::Migration[7.1]
  def change
    add_column :listings, :image, :string
    add_column :listings, :url, :string
  end
end
