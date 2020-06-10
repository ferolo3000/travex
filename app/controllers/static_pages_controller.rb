class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def login
    render 'login'
  end

  def dashboard
    render 'dashboard'
  end
end
