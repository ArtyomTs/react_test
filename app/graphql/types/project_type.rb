class Types::ProjectType < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: false
  field :users, [Types::UserType], null: false
end
