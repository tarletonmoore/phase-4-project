class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews, include: :user
        
        end
        
        def show
            review = Review.find_by(id: params[:id])
            if review
            render json: review, include: :user
            else
                render json: { error: "Review not found" }, status: :not_found
            end
          end
end
