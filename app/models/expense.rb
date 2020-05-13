class Expense < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  validates :location, presence: true, length: { maximum: 100 }
  validates :note, presence: true, length: { maximum: 2000 }
  validates :category, presence: true, length: { maximum: 200 }
  validates :payment_method, presence: true, length: { maximum: 200 }
  validates :amount, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 99999 }
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :user, presence: true

  before_validation :check_start_date_smaller_than_end_date

  private

  def check_start_date_smaller_than_end_date
    if self.start_date > self.end_date
      raise ArgumentError.new("start date cannot be larger than end date")
    end
  end
end
