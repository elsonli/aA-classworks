class SubsController < ApplicationController
  SUBS = ["MCDS", "JNTB", "WNDY", "TCOB", "KFCC", "PNDA"]

  before_action :require_logged_in
  
  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.user_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def show
    @sub = Sub.find(params[:id])
    render :show
  end

  def index
    @subs = Sub.all
    render :index
  end

  def edit
    @sub = Sub.find(params[:id])
    if (@sub.user == current_user)
      render :edit
    else
      flash[:errors] = ["Invalid Permissions"]
      redirect_to new_session_url
    end
  end

  def update
    @sub = Sub.find(params[:id])
    if (@sub.user == current_user) && @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end
end
