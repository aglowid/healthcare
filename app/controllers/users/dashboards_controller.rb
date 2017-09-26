class Users::DashboardsController < ApplicationController

	def index
	end

	def get_patient_data
		@users = User.joins(:role).where("roles.name" => "Patient")
    respond_to do |format|
      #format.html
	    format.html
	    format.json { send_data @users.to_json , :type => 'application/json; header=present', :disposition => "attachment; filename=patients.json" }
	    format.csv { send_data @users.to_csv , filename: "patients.csv"}
    end
	end	
		
end
