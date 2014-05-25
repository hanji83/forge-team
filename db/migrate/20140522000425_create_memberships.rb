class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :team_id, null: false
      t.string :rank, null: false

      t.timestamps
    end
    
    add_index :memberships, :user_id
    add_index :memberships, :team_id
    add_index :memberships, :rank
    add_index :memberships, [:user_id, :team_id], unique: true
  end
end
