json.(@team, :id, :teamname)
json.memberships @team.memberships do |membership|
  json.(membership, :id, :user_id, :team_id)
end