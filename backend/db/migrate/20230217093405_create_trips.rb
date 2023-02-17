class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.integer :country, default: 0, null: false
      t.integer :no_of_person, default: 1, null: false
      t.integer :budget_per_person, null: false
      t.references :user, null: false
      t.timestamps
    end
  end
end
