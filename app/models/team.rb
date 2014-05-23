class Team < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  
  has_many :memberships, foreign_key: :team_id, class_name: "Membership"
  belongs_to :sports, foreign_key: :sports_id, class_name: "Sport"
  has_many :users, through: :memberships, source: :user
end
