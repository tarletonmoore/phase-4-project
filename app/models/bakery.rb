class Bakery < ApplicationRecord
    # has_many :baked_goods
    # has_many :users, through: :baked_goods
    has_many :baked_goods, through: :users
    has_many :users
end
