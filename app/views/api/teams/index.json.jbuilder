json.array! @teams do |json, team|
  json.(team, :teamname, :id, :sports_id)
end