class User < ApplicationRecord
    has_secure_password
    has_many :baked_goods
    belongs_to :bakery
    validates :username, presence: true, uniqueness: true
end
