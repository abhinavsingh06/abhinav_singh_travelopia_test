class Trip < ApplicationRecord
  belongs_to :user, foreign_key: :user_id
  enum country: [:india, :africa, :europe]
  validates :country, presence: true
  validates :no_of_person, presence: true
  validates :budget_per_person, presence: true
end
