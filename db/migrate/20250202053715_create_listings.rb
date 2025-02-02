class CreateListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
