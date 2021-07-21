# frozen_string_literal: true

class User < ActiveRecord::Base
  serialize :liked_cats, Array
  has_many :posts


  extend Devise::Models 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.random_cat(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where("id IN (?)", ids)
  end

  #same with instance methods
  def random_cat
    ids = self.liked_cats.empty ? [0] : self.liked_cats
    Cat.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def liked_cat
    ids = self.liked_cats.empty ? [0] : self.liked_cats
    Cat.where("id IN (?)", ids)
  end
end
