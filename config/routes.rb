Rails.application.routes.draw do
  root 'pages#index'
  get 'pages/components'
  get 'pages/props'
  get 'pages/states'
  get 'pages/life_cycle'
  get 'pages/inline_styles'
  get 'pages/advanced'
  get 'hello_world/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
