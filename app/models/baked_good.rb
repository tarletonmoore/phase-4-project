class BakedGood < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    validates :title, presence: true
    validates :instructions, presence: true
    # accepts_nested_attributes_for :reviews

end
