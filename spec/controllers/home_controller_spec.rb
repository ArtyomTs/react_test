require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  describe "#index" do
    subject {get :index}
    it "expect to redirect unauthorized user" do
      expect(subject).to redirect_to new_user_session_url
    end
  end

end
