require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "should return true if user is admin" do
    user = User.new(admin: true)
    assert user.admin?
  end

  test "should return false if user is not admin" do
    user = User.new(admin: false)
    assert_not user.admin?
  end
end
