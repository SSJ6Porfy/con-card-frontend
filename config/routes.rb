Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    resources :events, only: [:index, :show, :edit, :destroy, :update, :create]
    resources :contributions, only: [:index, :show, :edit, :destroy, :update, :create]
    resources :campaigns, only: [:index, :show, :edit, :destroy, :update, :create]
  end

end
