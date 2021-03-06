module Api
  class UsersController < ApplicationController
    #skip_before_action :verify_authenticity_token
    def create
      @user = User.new(user_params)

      if @user.save
        render 'api/users/create', status: :created
      else
        render json: { success: false }, status: :bad_request
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :username, :role)
    end
  end
end
