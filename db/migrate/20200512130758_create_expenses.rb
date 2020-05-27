class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.date :date
      t.string :merchant
      t.string :location
      t.string :category
      t.integer :amount
      t.integer :split
      t.string :payment_method
      t.string :note
      t.string :image_url

      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
