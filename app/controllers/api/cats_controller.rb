class Api::CatsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: User.random_cat(current_user.liked_cats)
    current_user.posts.create(title:'yo')
  end

  def update
    current_user.liked_cats << params[:id].to_i
    current_user.save
  end

  def my_cats
    render json: User.liked(current_user.liked_cats)
  end



end
