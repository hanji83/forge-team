class CreateDBoatStats < ActiveRecord::Migration
  def change
    create_table :d_boat_stats do |t|
      t.integer :user_id, null: false
      t.integer :weight, null: false
      t.integer :height, null: false
      t.string :side, null: false

      t.timestamps
    end
    
    add_index :d_boat_stats, :user_id
    add_index :d_boat_stats, :weight
    add_index :d_boat_stats, :height
    add_index :d_boat_stats, :side
  end
end
