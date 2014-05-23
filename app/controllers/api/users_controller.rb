module Api
  class UsersController < ApiController
    def index
    end
    
    def show
      @user = User.find(params[:id])
      render json: @user
    end
    
    private
    def user_params
      params.require(:user).permit(:username, :password)
    end
  end
end