module Api
  class TeamsController < ApiController
    def index
      @teams = Team.all
      render json: @teams
    end
    
    def show
      @team = Team.find(params[:id])
      
      if @team
        render json: @team
      else
        render json: {:errors: @team.errors.full_messages}, status: 422
    end
    
    def update
      @team = current_user.find(params[:id])
      
      if @team.update_attributes(team_params)
        render json: @team
      else
        render json: {:errors: @team.errors.full_messages}, status: 422}
    end
    
    private
    def user_params
      params.require(:team).permit(:teamname, :sports_id)
    end
  end
end