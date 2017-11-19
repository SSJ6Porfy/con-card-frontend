class Event < ApplicationRecord
    validates :name, presence: true, uniqueness: { scope: :user, message: "User should have Unique Event Names" }
    
    belongs_to :user
    belongs_to :campaign
    has_many :contributions
end
