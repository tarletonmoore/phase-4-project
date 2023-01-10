class AddBakeryToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :bakery_id, :integer
  end
end
