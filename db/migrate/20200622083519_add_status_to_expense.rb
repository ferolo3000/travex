class AddStatusToExpense < ActiveRecord::Migration[5.2]
  def change
    add_column :expenses, :status, :integer, default: 0
  end
end
