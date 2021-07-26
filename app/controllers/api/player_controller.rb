class Api::PlayerController < ApplicationController
  before_action :set_player, only: [:show, :update, :destroy]
  def index
    render json: Player.all_formated
  end

  def show
    render json: @player
  end

  def assign_team
    params[:data].each do |player|
    pl = Player.find(player[:id])
    pl.update(team_id: player[:team_id])
    end
  end


  def create
    @player = Player.new(player_params)
    if(@player.save)
        render json: @player
    else
        render json: {errors: @player.errors}, status: :unprocessable_entity
    end 
  end

  def update
    if(@player.update(player_params))
        render json: @player
    else
        render json: {errors: @player.errors}, status: :unprocessable_entity
    end 
  end

  def destroy
    @player.destroy
    render json: @player
  end

  private

  def set_player
    @player = Player.find(params[:id])
  end 
          
  def player_params
    params.require(:player).permit(:id, :name, :position, :win, :lose, :win_rate, :tier_id, :team_id)
  end
end
