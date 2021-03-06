class UsersController < ApplicationController
  # Render a user's information
  def show
    @user = User.find(params[:id])

    # If the user is not logged in, they cannot see their profile page
    # Flash an error and redirect them to home
    if (not current_user) or (current_user != @user) or (not current_user.isAdmin)
      flash[:alert] = "You do not have permissions to view this user's info"
      redirect_to root_path
    else
      @url = request.url[0, request.url.index("/users")] + '/register/' + current_user.id.to_s
      @text = URI.escape("Sign up for Love, Sylvie with my unique link:", Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
      @encoded = URI.escape(@url, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    end
  end

  def refer
    # Parse comma separated emails and remove leading or
    # trailing whitespace
    strings = params[:emails].split(',').map { |e| e.strip }

    # Isolate strings which are valid email addresses
    emails = strings.select { |e| e[/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i] }

    # Find the user sending the referral
    @user = User.find(params[:id])
    if @user.nil?
      flash[:alert] = "User not found"
      redirect_to root_path
    elsif emails.empty?
      flash[:alert] = "Invalid emails entered"
      redirect_to @user
    else
      # Send an email to each referred email address
      emails.each do |e|
        ReferralNotifierMailer.send_referral_email(@user, e).deliver
      end

      # Redirect back to the user's referrals page
      flash[:notice] = "Referrals sent successfully"
      redirect_to @user
    end
  end
end
