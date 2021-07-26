class Tier < ApplicationRecord
    has_many :players, dependent: :destroy
end
