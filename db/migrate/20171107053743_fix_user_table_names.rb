class FixUserTableNames < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :Username, :username
    rename_column :users, :Email, :email
    rename_column :users, :Password_digest, :password_digest
    rename_column :users, :Session_token, :session_token
  end
end
