Rails.application.routes.draw do
  root to: "static_pages#home"

  get '/dashboard'        => 'static_pages#dashboard'
  get '/login'            => 'static_pages#login'
  get '/form'             => 'static_pages#form'
  get '/report'           => 'static_pages#report'   
  get '/receipts'         => 'static_pages#receipts' 
  get '/expenses/:id'     => 'static_pages#edit'

  namespace :api do

    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :expenses, only: [:index,:create, :show]

    get '/expenses'         => 'expenses#index'
    post '/expenses'        => 'expenses#create'
    delete '/expenses/:id'  => 'expenses#destroy'
  end

  # USERS
  post '/users' => 'users#create'
  # SESSIONS
  post '/sessions'      => 'sessions#create'
  get '/authenticated'  => 'sessions#authenticated'
  delete '/sessions'    => 'sessions#destroy'
end
