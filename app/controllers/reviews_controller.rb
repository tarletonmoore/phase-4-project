class ReviewsController < ApplicationController
    skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
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

          def create
            
            current_user = User.find_by(id: session[:user_id])
            # current_baked_good = BakedGood.find_by(id: params[:baked_good_id])
        if current_user
        # if current_baked_good
            review = Review.create(review_params)
        
            if review.valid?
                render json: review, status: :created
            else
                render json: { errors: [review.errors.full_messages] }, status: :unprocessable_entity
            end
        else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def update
        
         current_user = User.find_by(id: session[:user_id])
        # current_baked_good = BakedGood.find_by(id: params[:baked_good_id])
        # review = find_review

        #  if current_user === review
        if current_user
            review = find_review
        review.update(review_params)
        render json: review
         else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
      end
    end
    
      def destroy
        current_user = User.find_by(id: session[:user_id])
        if current_user
        review = find_review
        review.destroy
        head :no_content
        else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
        end
      end

    private

    def find_review
        Review.find_by(user_id: params[:user_id])
        end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
      end
    
    def review_params
        params.permit(:review, :baked_good_id, :user_id)
      end
end
