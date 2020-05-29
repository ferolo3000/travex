json.expenses do
    json.array! @expenses do |expense|
      json.id expense.id
      json.location expense.location
      json.date expense.date
      json.merchant expense.merchant
      json.amount expense.amount
      json.split expense.split
      json.category expense.category
      json.payment_method expense.payment_method
      json.note expense.note
      json.image_url expense.image_url
    end
end