module Api
  class SportsController < ApplicationController
    def create
      @sport = new Sport(sport_params)
      
      if @sport.save
        render :json @sport
      else
        render :json @sport.errors.full_messages, status: 422
      end
    end
    
    def index
      @sports = Sport.all
      render :json @sports
    end
    
    def show
      @sport = Sport.find(params[:id])
      
      if @sport
        render :json @sport
      else
        render :json @sport.errors.full_messages, status: 422
      end
    end
    
    def update
      @sport = Sport.find(params[:id])
      
      if @sport.update_attributes(sport_params)
        render :json @sport
      else
        render :json @sport.errors.full_messages, status: 422
      end
    end
    
    
    private
    def sport_params
      params.require(:sport).permit(:sport_type)
    end
  end
end