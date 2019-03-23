class Mutations::UpdateProject < Mutations::BaseMutation
  null true

  argument :project_id, ID, required: true
  argument :name, String, required: true

  field :project, Types::ProjectType, null: true

  def resolve(project_id:, name:)
    project = Project.find project_id
    project.update_attribute :name, name
    {
      project: project
    }
  end
end
