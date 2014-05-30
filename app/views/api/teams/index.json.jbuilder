json.array! @teams do |json, team|
  json.(team, :teamname, :id)
end