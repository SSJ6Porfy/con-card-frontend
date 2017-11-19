class AddForeignKeys < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :user_id, :integer, null: false
    add_column :events, :user_id, :integer, null: false
    add_column :events, :campaign_id, :integer, null: false
    add_column :contributions, :event_id, :integer, null: false
  end
end
