class AddUserToBakedGoods < ActiveRecord::Migration[6.1]
  def change
    add_column :baked_goods, :user_id, :integer
  end
end
