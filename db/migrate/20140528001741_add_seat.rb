class AddSeat < ActiveRecord::Migration
  def change
    add_column :memberships, :seat, :integer
    add_index :memberships, :seat
  end
end
