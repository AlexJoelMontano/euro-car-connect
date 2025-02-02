class AddNameAndUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    # Comment out or remove the line that adds the `name` column if it already exists
    # add_column :users, :name, :string
    add_column :users, :username, :string unless column_exists?(:users, :username)
  end
end
