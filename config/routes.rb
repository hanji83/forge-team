ForgeTeam::Application.routes.draw do
  root to: "static_pages#root"
  get "static_pages/about"
  get "static_pages/contact"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update]
    resources :teams, only: [:create, :index, :show, :update, :destroy]
    resources :memberships, only: [:create, :index, :show, :update, :destroy]
  end
  
  resources :users, only: [:new, :create]
  resource  :session, only: [:new, :create]
end