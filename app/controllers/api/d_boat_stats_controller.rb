module Api
  class DBoatStatsController < ApplicationController
    def create
      @dboatstat = new DBoatStat(dboatstat_params)
      
      if @dboatstat.save
        render json: @dboatstat
      else
        render json: @dboatstat.errors.full_messages, status: 422
      end
    end
    
    def index
      @dboatstats = DBoatStat.all
      render json: @dboatstats.errors.full_messages, status: 422
    end
    
    def show
      @dboatstat = DBoatStat.find(params[:id])
      
      if @dboatstat
        render json: @dboatstat
      else
        render json: @dboatstat.errors.full_messages, status: 422
      end
    end
    
    def update
      @dboatstat = DBoatStat.find(params[:id])
      
      if @dboatstat.update_attributes(dboatstat_params)
        render json: @dboatstat
      else
        render json: @dboatstat.errors.full_messages, status: 422
      end
    end
    
    
    private
    def dboatstat_params
      params.require(:dboatstat).permit(:user_id, :weight, :height, :side)
    end
  end
end