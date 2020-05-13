Rails.application.routes.draw do
  root to: "static_pages#home"

  get '/dashboard'               => 'static_pages#dashboard'

  # USERS
  post '/users' => 'users#create'
  # SESSIONS
  post '/sessions' => 'sessions#create'
  get '/authenticated' => 'sessions#authenticated'
  delete '/sessions' => 'sessions#destroy'
end
