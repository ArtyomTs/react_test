class Mutations::AssignUser < Mutations::BaseMutation
  null true

  argument :project_id, ID, required: true
  argument :user_id, ID, required: true

  field :project, Types::ProjectType, null: true

  def resolve(project_id:,user_id:)
    project = Project.find project_id
    user = User.find(user_id)
    project.users << user

    {
      project: project
    }
  end
end
