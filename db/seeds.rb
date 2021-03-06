# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "Andrew", password: "awesome", fname: "Andrew", lname: "Chen", weight: 170, height: 67, side: "right")
User.create!(username: "Guest", password: "guest123", fname: "Guest", lname: "Paddler", weight: 195, height: 70, side: "right")
User.create!(username: "PA", password: "pa12345", fname: "Perry", lname: "Ahyow", weight: 150, height: 69, side: "left")
User.create!(username: "TW", password: "tw12345", fname: "Tanya", lname: "Wang", weight: 130, height: 65, side: "left")
User.create!(username: "VL", password: "vl12345", fname: "Victor", lname: "Lacey", weight: 170, height: 71, side: "left")
User.create!(username: "DL", password: "dl12345", fname: "Devin", lname: "Liu", weight: 200, height: 70, side: "left")
User.create!(username: "SH", password: "sh12345", fname: "Samuel", lname: "Hamaguchi", weight: 230, height: 74, side: "right")
User.create!(username: "LR", password: "lr12345", fname: "Linda", lname: "Ross", weight: 125, height: 67, side: "left")
User.create!(username: "DC", password: "dc12345", fname: "Derek", lname: "Chan", weight: 160, height: 66, side: "left")
User.create!(username: "NL", password: "nl12345", fname: "Nick", lname: "Lau", weight: 170, height: 66, side: "left")
User.create!(username: "AS", password: "as12345", fname: "Anthony", lname: "Schooley", weight: 180, height: 67, side: "right")
User.create!(username: "KS", password: "ks12345", fname: "Karen", lname: "Schooley", weight: 130, height: 64, side: "right")
User.create!(username: "JS", password: "js12345", fname: "Jaime", lname: "Scat", weight: 160, height: 67, side: "right")
User.create!(username: "TS", password: "ts12345", fname: "Titania", lname: "Su", weight: 135, height: 67, side: "right")
User.create!(username: "MN", password: "mn12345", fname: "Mason", lname: "Nandkeolyar", weight: 160, height: 70, side: "right")
User.create!(username: "RF", password: "rf12345", fname: "Ricky", lname: "Fung", weight: 160, height: 67, side: "left")
User.create!(username: "JL", password: "jl12345", fname: "Jason", lname: "Li", weight: 145, height: 70, side: "right")
User.create!(username: "RH", password: "rh12345", fname: "Randy", lname: "Honsby", weight: 160, height: 68, side: "left")
User.create!(username: "KW", password: "kw12345", fname: "Kyle", lname: "Wong", weight: 180, height: 65, side: "left")
User.create!(username: "AA", password: "aa12345", fname: "Angus", lname: "Ali", weight: 150, height: 67, side: "right")
User.create!(username: "NR", password: "nr12345", fname: "Ned", lname: "Ruggeri", weight: 155, height: 72, side: "right")
User.create!(username: "KP", password: "kp12345", fname: "Kush", lname: "Patel", weight: 160, height: 70, side: "right")
User.create!(username: "CA", password: "ca12345", fname: "CJ", lname: "Avilla", weight: 185, height: 70, side: "left")
User.create!(username: "JF", password: "jf12345", fname: "Jeff", lname: "Fiddler", weight: 160, height: 69, side: "right")
User.create!(username: "WH", password: "wh12345", fname: "Will", lname: "Hastings", weight: 170, height: 69, side: "right")
User.create!(username: "BS", password: "bs12345", fname: "Buck", lname: "Schlegeris", weight: 130, height: 75, side: "right")
User.create!(username: "AR", password: "ar12345", fname: "Andrew", lname: "Richards", weight: 160, height: 73, side: "right")

Membership.create!(team_id: 2, rank: "admin", user_id: 1, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 2, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 3, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 4, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 5, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 6, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 7, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 8, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 9, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 10, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 11, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 12, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 13, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 14, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 15, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 16, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 17, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 18, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 19, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 20, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 21, seat: nil)
Membership.create!(team_id: 2, rank: "admin", user_id: 22, seat: nil)

Team.create!(teamname: "Dieselfish")
Team.create!(teamname: "Project Floaters")
Team.create!(teamname: "Bay Area Dragons")
Team.create!(teamname: "Ripple Effect")
Team.create!(teamname: "Dragon Warriors")
Team.create!(teamname: "Lightwave")
Team.create!(teamname: "California United")
Team.create!(teamname: "KP Dragons")
