# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { username: 'Tess', email: 'Tess@test.com', password: 'password' },
  { username: 'Marcus', email: 'Marcus@test.com', password: 'password' },
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
    image_url: 'https://ferolobucket.s3.amazonaws.com/hotel.png',
    user: users.first
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
    image_url: 'https://ferolobucket.s3.amazonaws.com/restaurant.png',
    user: users.first
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
    image_url: 'https://ferolobucket.s3.amazonaws.com/restaurant.png',
    user: users.first
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
    image_url: 'https://ferolobucket.s3.amazonaws.com/taxi.png',
    user: users.second
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
    image_url: 'https://ferolobucket.s3.amazonaws.com/taxi.png',
    user: users.second
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
    image_url: 'https://ferolobucket.s3.amazonaws.com/taxi.png',
    user: users.second
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
    image_url: '',
    user: users.second
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
    image_url: '',
    user: users.second
  },
])
