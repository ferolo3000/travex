class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def login
    render 'login'
  end

  def edit
    render 'edit'
  end

  def dashboard
    render 'dashboard'
  end
end
