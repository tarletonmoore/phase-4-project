class BakedGood < ApplicationRecord
    belongs_to :user
    has_one :bakery, through: :user
    validates :title, presence: true
    validates :instructions, length: {minimum: 50}
end
