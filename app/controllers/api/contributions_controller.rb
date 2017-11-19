class Api::ContributionsController < ApplicationController

    
    def index
        @contributions = Contribution.all
    end

    def show
        @contribution = Contribution.find_by(id: params[:id])
    end

    def create
        @contribution = Contribution.new(contribution_params)
        
        if @contribution.save
            render :show
        else
            render json: @contribution.errors.full_messages, status: 422
        end
    end

    def update
        @contribution = Contribution.new(contribution_params)
        
        if @contribution.update_attributes(contribution_params)
            render :show
        else
            render json: @contribution.errors.full_messages, status: 422
        end
    end

    def destroy
        @contribution = Contribution.find_by(id: params[:id])
        if @contribution
            @contribution.destroy
            render :show
          else
            render json: ["contribution does not exist!"], status: 422
          end
    end

    def contribution_params
        params
            .require(:contribution)
                .permit(:first_name, :last_name, :street,
                        :city_town, :state, :zip_code,
                        :email, :phone_number, :amount,
                        :contribution_type, :event_id )
    end
end
