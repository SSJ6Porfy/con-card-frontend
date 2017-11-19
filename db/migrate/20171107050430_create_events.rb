class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :venue   
      t.string :city      
      t.string :state     
      t.timestamps
    end
  end
end
