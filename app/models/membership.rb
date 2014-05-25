class Membership < ActiveRecord::Base
  validates :user_id, presence: true
  validates :team_id, presence: true
  validates :rank, presence: true
  validates :user_id, :uniqueness => {scope: :team_id}
  belongs_to :user, class_name: "User"
  belongs_to :team, class_name: "Team"
end
