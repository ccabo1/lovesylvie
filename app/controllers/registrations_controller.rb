class RegistrationsController < Devise::RegistrationsController
  def new
    if params[:id]
      if User.exists?(params[:id])
        @referrer = User.find(params[:id])
        super
      else
        flash[:alert] = "Referrer with passed in ID not found"
        redirect_to new_user_registration_path
      end
    else
      super
    end
  end

  # def referred
  #   if params[:id]
  #     if User.exists?(params[:id])
  #       @referrer = User.find(params[:id])
  #     else
  #       flash[:alert] = "Referrer with passed in ID not found"
  #       redirect_to new_user_registration_path
  #       new
  #     end
  #   else
  #     flash[:alert] = "Referrer with passed in ID not found"
  #     redirect_to new_user_registration_path
  #     new
  #   end
  # end

  def create
    if params[:id]
      if User.exists?(params[:id])
        @user = User.find(params[:id])
        @user.referrals += 1
        @user.save
        super
      else
        redirect_to new_referral_path(params[:id])
      end
    else
      super
    end
  end

  def update
    super
  end
end
