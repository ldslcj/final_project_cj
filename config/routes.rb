Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :player
    resources :team
    resources :tiers
    resources :images
    post '/player/assign_team', to: 'player#assign_team'

    post '/images/upload1', to: 'images#upload_1_image'
    post '/images', to: 'images#destroy'
    post '/images/upload2', to: 'images#upload_1_image_with_data'
    delete '/images/upload2', to: 'images#destroy'
    post '/images/upload3', to: 'images#upload_1_image_auto'

    get '/images', to: 'images#index'
  end 
end
