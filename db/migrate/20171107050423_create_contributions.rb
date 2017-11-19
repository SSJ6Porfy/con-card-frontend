class CreateContributions < ActiveRecord::Migration[5.1]
  def change
    create_table :contributions do |t|
      t.string  :first_name, null: false
      t.string  :last_name, null: false
      t.string  :street      
      t.string  :city_town
      t.string  :state
      t.string  :zip_code
      t.string  :email
      t.string  :phone_number
      t.integer :amount, null: false
      t.string  :contribution_type, null: false
      t.date :date, null: false  
      t.timestamps
    end
  end
end
