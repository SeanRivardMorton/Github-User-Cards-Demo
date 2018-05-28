Rails.application.routes.draw do
  get 'welcome/index'

  resources :gitusers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#twittercard'
end
