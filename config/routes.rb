Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  # Root route
  root 'home#index'

  # Resources
  resources :home
  resources :posts
  resources :documents
  resources :listings

  # Search route
  get 'search', to: 'posts#search'

  # Browse route (optional)
  get '/browse', to: 'posts#index', as: 'browse'

  # Health check
  get 'up', to: 'rails/health#show', as: :rails_health_check
end
