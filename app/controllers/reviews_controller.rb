class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews, include: :baked_good
        # :user
        
        end
        
        def show
            review = Review.find_by(id: params[:id])
            if review
            render json: review, include: :baked_good
            # :user
            else
                render json: { error: "Review not found" }, status: :not_found
            end
          end
end
