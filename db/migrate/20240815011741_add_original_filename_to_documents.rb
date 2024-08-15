class AddOriginalFilenameToDocuments < ActiveRecord::Migration[7.1]
  def change
    add_column :documents, :original_filename, :string
  end
end
