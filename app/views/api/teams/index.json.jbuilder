json.array! @teams do |team|
  json.(team, :teamname, :id)
end