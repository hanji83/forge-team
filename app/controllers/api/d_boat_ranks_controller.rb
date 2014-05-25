module Api
  class DBoatRanksController < ApiController
    def index
      @dbranks = DBoatRank.all
      render json: @dbranks
    end
    
    def show
      @dbrank = DBoatRank.find(params[:id])
      
      if @dbrank
        render json: @dbrank
      else
        render json: @dbrank.errors.full_messages, status: 422
      end
    end
    
    def update
      @dbrank = DBRank.find(params[:id])
      
      if @dbrank.update_attributes(dbrank_params)
        render json: @dbrank
      else
        render json: @dbrank.errors.full_messages, status: 422
    end
    
    private
    def dbrank_params
      params.require(:dboatrank).permit(:position)
    end
  end
end
