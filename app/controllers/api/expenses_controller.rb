module Api
  class ExpensesController < ApplicationController

    def create
      token = cookies.signed[:travex_session_token]
      session = Session.find_by(token: token)
      user = session.user
      expense = user.expenses.new(expense_params)
      if expense.save
        render 'api/expenses/create', status: :ok
      else
        render json: { success: false }, status: :bad_request
      end
    end

    def index
      @expenses = Expense.where(user_id: params[:user_id])
      return render json: { error: 'not_found' }, status: :not_found if !@expenses
      render 'api/expenses/index', status: :ok
    end

    def show
      @expense = Expense.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@expense

      render 'api/expenses/show', status: :ok
    end


    private

   def expense_params
     params.require(:expense).permit(:date, :merchant, :location, :amount, :split, :category, :payment_method,
        :note, :image_url)
   end
  end
end
