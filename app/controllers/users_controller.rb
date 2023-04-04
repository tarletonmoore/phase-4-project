class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :user_reviews]
def index
  users = User.all
  render json: users, include: :reviews
end

    def create
        
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, include: :reviews
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
      end


      # Make a custom post route that sends a parameter of number. Sort through the users and find all users that have more than that number of reviews. Render json of all the users who meet that criteria. If no users meet that criteria send make a message in json saying so.

      def user_reviews
users = User.all.select {|u| u.reviews.count >= params[:number].to_i}
if users.count >= params[:number]
  render json: users
else
  render json: {errors: "no matching results"}, status: :unprocessable_entity
end
      end

    private

   
    def user_params
      params.permit(:username, :password, :password_confirmation, :bio)
    end
end
