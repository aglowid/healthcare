class Role < ApplicationRecord
	# associations
	has_one :user

	ROLES = ["Hospital", "Patient"]
end
