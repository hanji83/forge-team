module Api
  class TeamsController < ApiController
    def index
      @teams = Team.all
      # render json: @teams
      render :index
    end
    
    def show
      @team = Team.find(params[:id])
      
      if @team
        render json: @team
      else
        render json: @team.errors.full_messages, status: 422
      end
    end
    
    def update
      @team = Team.find(params[:id])
      
      if @team.update_attributes(team_params)
        render json: @team
      else
        render json: @team.errors.full_messages, status: 422
      end
    end
    
    def create
      @team = Team.new(team_params)
      if @team.save
        render :json => @team
      else
        render :json => @team.errors.full_messages, :status => 422
      end
    end
    
    private
    
    def team_params
      params.require(:team).permit(:teamname, :sports_id)
    end
    
  end
  
end