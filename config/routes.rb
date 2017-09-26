Rails.application.routes.draw do
  get 'home/index'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    passwords: 'users/passwords'
  }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #set root path
  root to: "home#index"
   
  namespace :users do 
	  # dashboard for hospital 
	  get "/dashboard" => "dashboards#index"
	  post "/download_patients_data" => "dashboards#get_patient_data"
  end	  
end
