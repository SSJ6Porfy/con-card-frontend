class Campaign < ApplicationRecord
    validates :name, presence: true, uniqueness: { scope: :user, message: "User should have Unique Campaign Names" }

    belongs_to :user
    has_many :events
end
