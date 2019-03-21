class Mutations::UpdateProject < Mutations::BaseMutation
  null true

  argument :project_id, ID, required: true
  argument :name, String, required: true
  argument :assignee_ids, [ID], required: true

  field :project, Types::ProjectType, null: true

  def resolve(project_id:, name:, assignee_ids:)
    project = Project.find project_id
    users = User.where(id: assignee_ids)
    project.users << users

    {
      project: project
    }
  end
end
