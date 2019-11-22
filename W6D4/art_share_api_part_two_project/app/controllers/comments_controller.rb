class CommentsController < ApplicationController
  def index
    # debugger
    if params[:comment][:user_id] && params[:comment][:artwork_id]
      render json: Comment.find_by(user_id: params[:comment][:user_id], artwork_id: params[:comment][:artwork_id])
    elsif params[:comment][:user_id] 
      render json: User.find_by(id: params[:comment][:user_id]).comments
    else 
      render json: Artwork.find_by(id: params[:comment][:artwork_id]).comments
    end   
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :artwork_id)
  end
end
