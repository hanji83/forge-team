class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.integer :weight
      t.integer :height
      t.string :side
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    
    add_index :users, :username, unique: true
    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :weight
    add_index :users, :height
    add_index :users, :side
    add_index :users, :session_token, unique: true
  end
end
