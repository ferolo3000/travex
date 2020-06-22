json.expenses do
    json.array! @data do |expense|
      json.id expense.id
      json.location expense.location
      json.date expense.date
      json.merchant expense.merchant
      json.amount expense.amount
      json.split expense.split
      json.category expense.category
      json.payment_method expense.payment_method
      json.note expense.note
      json.user expense.user.username
      json.status expense.status
      json.image url_for(expense.image) if expense.image.attached?
    end
end