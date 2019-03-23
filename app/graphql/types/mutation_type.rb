module Types
  class MutationType < Types::BaseObject
    field :update_project, mutation: Mutations::UpdateProject
    field :assign_user, mutation: Mutations::AssignUser
  end
end
