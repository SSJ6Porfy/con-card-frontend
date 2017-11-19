class Contribution < ApplicationRecord
    validates :first_name, :last_name, :amount, :contribution_type, :date, presence: true

    belongs_to :event
end
