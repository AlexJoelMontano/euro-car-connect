class Document < ApplicationRecord
  has_one_attached :document

  before_save :store_original_filename

  private

  def store_original_filename
    if document.attached?
      self.original_filename = document.blob.filename.to_s
    else
      self.original_filename = nil
    end
  end
end
