class Api::SessionsController < ApplicationController

  def create
    render "api/users/show"
  end

  def destroy
    if logout
        render json: {}
    else
      render json: { errorkey: [ "error current user does not exist" ] }, status: 404
    end
  end
end
