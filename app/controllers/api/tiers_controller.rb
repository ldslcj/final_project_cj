class Api::TiersController < ApplicationController
    before_action :set_tier, only: [:show, :destroy]
    def index
      render json: Tier.all
    end
  
    def show
      @tier = Tier.find(params[:id])
      render json: @tier
    end
  
    private
  
    def set_tier
      @tier = Tier.find(params[:id])
    end 
            
    def tier_params
      params.require(:tier).permit(:id, :name, :value, :image)
    end
end
