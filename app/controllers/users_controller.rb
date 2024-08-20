class UsersController < ApplicationController

  layout 'application'

  def index
    @users = User.all
  end

  def show
    @user = current_user
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to posts_path, notice: 'Account created successfully!'
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to @user, notice: "Your account was updated."
    else
      render :edit
    end
  end

  def destroy
    @user = current_user
    @user.destroy
    reset_session
    redirect_to root_path, notice: 'Account successfully deleted.'
  end


  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :username, :email, :password)
  end
end
