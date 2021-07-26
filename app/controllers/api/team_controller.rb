class Api::TeamController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]
  def index
    render json: Team.all
  end

  def show
    @team = Team.find(params[:id])
    render json: @team
  end

  def create
    @team = Team.new(team_params)
    if(@team.save)
        render json: @team
    else
        render json: {errors: @team.errors}, status: :unprocessable_entity
    end 
  end

  def update
    if(@team.update(team_params))
        render json: @team
    else
        render json: {errors: @team.errors}, status: :unprocessable_entity
    end 
  end

  def destroy
    @team.destroy
    render json: @team
  end

  private

  def set_team
    @team = Team.find(params[:id])
  end 
          
  def team_params
    params.require(:team).permit(:id, :name)
  end
end
