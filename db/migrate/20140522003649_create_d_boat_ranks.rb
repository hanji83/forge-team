class CreateDBoatRanks < ActiveRecord::Migration
  def change
    create_table :d_boat_ranks do |t|
      t.string :position, null: false

      t.timestamps
    end
    
    add_index :d_boat_ranks, :position, unique: true
  end
end
