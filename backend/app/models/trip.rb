class Trip < ApplicationRecord
  belongs_to :user, foreign_key: :user_id
  enum place: [:india, :africa, :europe]
  validates :place, presence: true, inclusion: place.keys 
  validates :no_of_person, presence: true
  validates :budget_per_person, presence: true
end
