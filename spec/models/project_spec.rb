require 'rails_helper'

RSpec.describe Project, type: :model do
  it{ is_expected.to have_many :assignments }
  it{ is_expected.to have_many :users }
end
