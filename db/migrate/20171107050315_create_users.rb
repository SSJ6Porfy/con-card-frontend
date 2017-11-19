class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :Username, null: false
      t.string :Email, null: false
      t.string :Password_digest, null: false
      t.string :Session_token, null: false
      t.timestamps
    end
    add_index :users, :Session_token
    add_index :users, :Username
  end
end
