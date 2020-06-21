# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { username: 'Tess', email: 'Tess@test.com', password: 'password', role: 'approver' },
  { username: 'Marcus', email: 'Marcus@test.com', password: 'password', role: 'user' },
])

expenses = Expense.create([
  {
    date: '27-10-2020',
    merchant: 'Hotel Holiday Inn',
    location: 'New York',
    category: 'Lodging',
    amount: 150.50,
    split: 2,
    payment_method: 'Credit Card',
    note: 'Hotel for Reactjs Conference in New York',
    image: 'https://www.invoicesimple.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-30-at-11.08.40-AM.png',
    user: User.first
  },
  {
    date: '27-11-2020',
    merchant: 'Restaurant ABC',
    location: 'New York',
    category: 'Meals & Entertainment',
    amount: 12,
    split: 1,
    payment_method: 'Cash',
    note: 'Restaurant close to the hotel',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/170px-ReceiptSwiss.jpg',
    user: User.first
  },
  {
    date: '27-11-2020',
    merchant: 'Restaurant Palace',
    location: 'London',
    category: 'Meals & Entertainment',
    amount: 15.5,
    split: 1,
    payment_method: 'Credit Card',
    note: 'Restaurant close to the hotel',
    image: 'https://previews.123rf.com/images/latkun/latkun1903/latkun190300045/119689770-realistic-paper-shop-receipt-with-barcode-vector-shop-terminal-vector.jpg',
    user: User.first
  },
  {
    date: '09-03-2020',
    merchant: 'Local Bus',
    location: 'London',
    category: 'Transportation',
    amount: 10,
    split: 1,
    payment_method: 'Cash',
    note: 'Bus to the airport',
    image: '',
    user: User.second
  },
  {
    date: '30-10-2020',
    merchant: 'Taxi Cop. ABC',
    location: 'Paris',
    category: 'Transportation',
    amount: 7,
    split: 1,
    payment_method: 'Other Payment Method',
    note: 'Taxi to the airport',
    image: 'https://bloximages.chicago2.vip.townnews.com/dailylocal.com/content/tncms/assets/v3/editorial/d/77/d7745b82-1c1f-11e9-b3bb-032816e700e0/5c43798f9d036.image.jpg',
    user: User.second
  },
  {
    date: '01-05-2020',
    merchant: 'Taxi Cop. ABC',
    location: 'Paris',
    category: 'Transportation',
    amount: 10.25,
    split: 1,
    payment_method: 'Other Payment Method',
    note: 'Taxi to the hotel',
    image: 'https://ferolobucket.s3.amazonaws.com/taxi.png',
    user: User.second
  },
  {
    date: '15-03-2020',
    merchant: 'Air France',
    location: 'Paris',
    category: 'Air Travel',
    amount: 1500,
    split: 1,
    payment_method: 'Credit Card',
    note: 'Flight Tickets',
    image: 'https://templates.invoicehome.com/receipt-template-us-classic-white-750px.png',
    user: User.second
  },
  {
    date: '01-05-2020',
    merchant: 'Vodafone',
    location: 'Paris',
    category: 'Phone & Internet',
    amount: 50.75,
    split: 1,
    payment_method: 'Credit Card',
    note: 'Internet',
    image: '',
    user: User.second
  },
])
