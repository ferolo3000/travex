json.expense do
    json.id @expense.id
    json.date @expense.date
    json.location @expense.location
    json.merchant @expense.merchant
    json.amount @expense.amount
    json.split @expense.split
    json.category @expense.category
    json.payment_method @expense.payment_method
    json.note @expense.note
    json.image_url @expense.image_url
end