JournalApp::Application.routes.draw do
  namespace :api do
    resources :posts, :only => [:index, :create, :destroy]
  end

  resources :posts, :only => [:index]
end
