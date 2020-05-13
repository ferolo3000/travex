class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.date :start_date
      t.date :end_date
      t.string :location
      t.string :category
      t.integer :amount
      t.string :payment_method
      t.string :note
      t.string :image_url

      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
