class CreateTiers < ActiveRecord::Migration[6.1]
  def change
    create_table :tiers do |t|
      t.string :name
      t.decimal :value
      t.string :image

      t.timestamps
    end
  end
end
