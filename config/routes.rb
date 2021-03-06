Rails.application.routes.draw do
  root to: "static_pages#home"

  get '/dashboard'        => 'static_pages#dashboard'
  get '/login'            => 'static_pages#login'
  get '/logout'            => 'static_pages#logout'
  get '/form'             => 'static_pages#form'
  get '/report'           => 'static_pages#report'   
  get '/receipts'         => 'static_pages#receipts' 
  get '/expenses/:id'     => 'static_pages#edit'
  get '/admin'            => 'static_pages#admin'

  namespace :api do

    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy, :redirect_after_sign_in]
    resources :expenses, only: [:index, :create, :show, :delete, :update, :index_all]

    get     '/admin'                => 'expenses#index_all'
    get     '/:user_id/expenses'    => 'expenses#index'
    post    '/expenses'             => 'expenses#create'
    put     '/expenses/:id'         => 'expenses#update'
    delete  '/expenses/:id'         => 'expenses#destroy'
    get     '/authenticated'        => 'sessions#authenticated'
    put     '/submitted/:id'        => 'expenses#update_submitted'
    put     '/approved/:id'         => 'expenses#update_approved'
    put     '/rejected/:id'         => 'expenses#update_rejected'

    # USERS
    post '/users'         => 'users#create'
    # SESSIONS
    post '/sessions'      => 'sessions#create'
    delete '/sessions'    => 'sessions#destroy'
  end

  # USERS
  post '/users'         => 'users#create'
  # SESSIONS
  post '/sessions'      => 'sessions#create'
  get '/authenticated'  => 'sessions#authenticated'
  delete '/sessions'    => 'sessions#destroy'
end
