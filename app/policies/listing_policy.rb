class ListingPolicy < ApplicationPolicy
  def destroy?
    user.present? && (user.admin? || record.user == user)
  end

  class Scope < Scope
    def resolve
      scope.all
    end
  end
end
