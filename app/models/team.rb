class Team < ActiveRecord::Base
  validates :teamname, presence: true, uniqueness: true
  
  has_many :memberships, foreign_key: :team_id, class_name: "Membership"
  has_many :users, through: :memberships, source: :user
end
