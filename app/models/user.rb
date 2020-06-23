class User < ApplicationRecord
  has_many :sessions
  has_many :expenses


  validates :username, presence: true, length: { minimum: 3, maximum: 64 }
  validates :password, presence: true, length: { minimum: 6, maximum: 64 }
  validates :email, presence: true, length: { minimum: 5, maximum: 500 }
  validates :role, presence: true

  validates_uniqueness_of :username
  validates_uniqueness_of :email

  after_validation :hash_password

  private

  def hash_password
    self.password = BCrypt::Password.create(self.password)
  end
end
