class BakedGoodsController < ApplicationController
    skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

def index
bakedgoods = BakedGood.all
render json: bakedgoods, include: :user

end

def show
    bakedgood = BakedGood.find_by(id: params[:id])
    if bakedgood
    render json: bakedgood, include: :user
    else
        render json: { error: "Baked Good not found" }, status: :not_found
    end
  end

    def create
        # byebug
        current_user = User.find_by(id: session[:user_id])
        if current_user
            bakedgood = current_user.baked_goods.create(bakedgood_params)
        
            if bakedgood.valid?
                render json: bakedgood, include: :user, status: :created
            else
                render json: { errors: [bakedgood.errors.full_messages] }, status: :unprocessable_entity
            end
        else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
        end
      
    end

    # def destroy
    #     current_user = User.find_by(id: session[:user_id])
    #     if current_user
    #     bakedgood = find_baked_good
    #     bakedgood.destroy
    #     head :no_content
    #     else
    #         render json: {errors: ["Not Authorized"]}, status: :unauthorized
    #   end
    
      private
    
    # def find_baked_good
    # BakedGood.find(params[:id])
    # end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
      end

    def bakedgood_params
      params.permit(:title, :instructions)
    end
end
