class PostsController < ApplicationController
  before_action :require_logged_in

  def create
    @post = Post.new(post_params)
    @post.sub_id = params[:sub_id]
    @post.user_id = current_user.id 
    if @post.save
      redirect_to post_url(@post)
    else   
      flash[:errors] = @post.errors.full_messages
      redirect_to sub_url(@post.sub)
    end
  end

  def edit
    @post = Post.find(params[:id])
    if @post.user == current_user
      render :edit
    else 
      redirect_to new_session_url
    end
  end

  def update
    @post = Post.find(params[:id])
    if (@post.user == current_user) && @post.update(post_params)
      redirect_to post_url(@post)
    else   
      flash.now[:errors] = @post.errors.full_messages
      render :new 
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to sub_url(@post.sub)
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:title,:url,:content)
  end
end
