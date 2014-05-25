class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :teamname, null: false

      t.timestamps
    end
    
    add_index :teams, :teamname, unique: true
  end
end
