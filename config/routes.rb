Rails.application.routes.draw do
  get 'groups/index'
  devise_for :users
  root "groups#index"
  resources :users, only: [:edit, :update, :destroy]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :message,only: [:index]
  end 
end
