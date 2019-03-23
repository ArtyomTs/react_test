module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :projects, [Types::ProjectType], null: false,
      description: "list of projects"
    def projects
      Project.all.includes(:users)
    end

    field :candidates, [Types::UserType], null: false do
      argument :project_id, ID, required: true
    end

    def candidates(project_id:)
      assigned_ids = Assignment.where(project_id: project_id).pluck(:user_id)
      User.where.not(id: assigned_ids)
    end
  end
end
