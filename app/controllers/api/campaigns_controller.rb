class Api::CampaignsController < ApplicationController

    def index
        @campaigns = Campaign.all
    end

    def show
        @campaign = Campaign.find_by(id: params[:id])
    end

    def create
        @campaign = Campaign.new(campaign_params)
        
        if @campaign.save
            render :show
        else
            render json: @campaign.errors.full_messages, status: 422
        end
    end

    def update
        @campaign = Campaign.new(campaign_params)
        
        if @campaign.update_attributes(campaign_params)
            render :show
        else
            render json: @campaign.errors.full_messages, status: 422
        end
    end

    def destroy
        @campaign = Campaign.find_by(id: params[:id])
        if @campaign
            @campaign.destroy
            render :show
          else
            render json: ["campaign does not exist!"], status: 422
          end
    end

    def campaign_params
        params.require(:campaign).permit(:name, :user_id)
    end
end
