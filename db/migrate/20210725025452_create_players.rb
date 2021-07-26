class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.float :win
      t.float :lose
      t.float :win_rate
      t.string :position
      t.belongs_to :tier, null: false, foreign_key: true
      t.belongs_to :team, foreign_key: true

      t.timestamps
    end
  end
end
