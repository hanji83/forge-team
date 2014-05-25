module Api
  class UsersController < ApiController
    def index
      @users = User.all
      render json: @users
    end
    
    def show
      @user = User.find(params[:id])
      
      if @user
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
    
    def update
      @user = current_user.find(params[:id])
      
      if @user.update_attributes(user_params)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
    
    private
    def user_params
      params.require(:user).permit(:username, :password)
    end
    
  end
end