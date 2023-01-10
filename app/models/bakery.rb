class Bakery < ApplicationRecord
    has_many :users
    has_many :baked_goods, through: :user
end
