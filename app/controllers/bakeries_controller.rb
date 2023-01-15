class BakeriesController < ApplicationController

    def index
        bakeries = Bakery.all
        render json: bakeries, include: :user
        
        end

    def show
        bakery = Bakery.find_by(id: params[:id])
        if bakery
        render json: bakery, include: :user
        else
            render json: { error: "Bakery not found" }, status: :not_found
        end
      end
end
