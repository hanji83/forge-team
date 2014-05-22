class CreateSports < ActiveRecord::Migration
  def change
    create_table :sports do |t|
      t.string :sport_type, null: false

      t.timestamps
    end
    
    add_index :sports, :sport_type, unique: true
  end
end
