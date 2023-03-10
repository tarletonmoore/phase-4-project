class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    # has_one :bakery, through: :baked_goods
    has_many :baked_goods, through: :reviews
    validates :username, presence: true, uniqueness: true
end
