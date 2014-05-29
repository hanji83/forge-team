module Api
  class MembershipsController < ApiController
    def create
      @membership = Membership.new(membership_params)
      
      if @membership.save
        render json: @membership
      else
        render json: @membership.errors.full_messages, status: 422
      end
    end
    
    def index
      @memberships = Membership.all
      render json: @memberships
    end
    
    def show
      @membership = Membership.find(params[:id])
      
      if @membership
        render json: @membership
      else
        render json: @membership.errors.full_messages, status: 422
      end
    end
    
    def update
      @membership = Membership.find(params[:id])
      
      if @membership.update_attributes(membership_params)
        render json: @membership
      else
        render json: @membership.errors.full_messages, status: 422
      end
    end
    
    def destroy
      @membership = Membership.find(params[:id])
      
      if @membership.destroy
        render json: @membership
      else
        render json: @membership.errors.full_messages, status: 422
      end
    end
    
    private
    def membership_params
      params.require(:membership).permit(:user_id, :team_id, :rank, :seat)
    end
  end
end