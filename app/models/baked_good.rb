class BakedGood < ApplicationRecord
    belongs_to :user
    # has_one :bakery, through: :user
    belongs_to :bakery
    validates :title, presence: true
    validates :instructions, length: {minimum: 50}
end
