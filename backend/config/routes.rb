Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :submissions, only: [:index, :create]

    end
  end
  root "api/v1/submissions#index"
end
