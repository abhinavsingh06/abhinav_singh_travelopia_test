class Api::V1::SubmissionsController < ApplicationController
  def index
    render json: User.all.to_json(include: [:trips]), status: :ok
  end

  def create
    @user = User.new(name: user_params[:name], email: user_params[:email])
    if @user.save
      @trip = @user.trips.build(no_of_person: user_params[:no_of_person], place: user_params[:place], budget_per_person: user_params[:budget_per_person] )
      if @trip.save
        render status: :ok, json: { notice: "Succesfully created the trip." }
      else
        render json: @user.trips.errors.full_messages.to_sentence, status: :unprocessable_entity
      end 
    else
      render json: @user.errors.full_messages.to_sentence, status: :unprocessable_entity
    end
  end

  
  private

  def user_params
    params.require(:enquiry).permit(:name, :email, :no_of_person, :place, :budget_per_person)
  end
end
