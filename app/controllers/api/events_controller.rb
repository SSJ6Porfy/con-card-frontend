class Api::EventsController < ApplicationController

    def index
        @events = Event.all
    end

    def show
        @event = Event.find_by(id: params[:id])
    end

    def create
        @event = Event.new(event_params)
        
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.new(event_params)
        
        if @event.update_attributes(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find_by(id: params[:id])
        if @event
            @event.destroy
            render :show
          else
            render json: ["Event does not exist!"], status: 422
          end
    end

    def event_params
        params.require(:event).permit(:name, :city, :venue, :state, :user_id, :campaign_id)
    end
end
