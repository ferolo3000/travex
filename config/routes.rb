Rails.application.routes.draw do
  root to: "static_pages#home"

  get '/dashboard'               => 'static_pages#dashboard'
end
