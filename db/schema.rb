# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140528001741) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "memberships", force: true do |t|
    t.integer  "user_id",    null: false
    t.integer  "team_id",    null: false
    t.string   "rank",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "seat"
  end

  add_index "memberships", ["rank"], name: "index_memberships_on_rank", using: :btree
  add_index "memberships", ["seat"], name: "index_memberships_on_seat", using: :btree
  add_index "memberships", ["team_id"], name: "index_memberships_on_team_id", using: :btree
  add_index "memberships", ["user_id", "team_id"], name: "index_memberships_on_user_id_and_team_id", unique: true, using: :btree
  add_index "memberships", ["user_id"], name: "index_memberships_on_user_id", using: :btree

  create_table "teams", force: true do |t|
    t.string   "teamname",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "teams", ["teamname"], name: "index_teams_on_teamname", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.integer  "weight"
    t.integer  "height"
    t.string   "side"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["fname"], name: "index_users_on_fname", using: :btree
  add_index "users", ["height"], name: "index_users_on_height", using: :btree
  add_index "users", ["lname"], name: "index_users_on_lname", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["side"], name: "index_users_on_side", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree
  add_index "users", ["weight"], name: "index_users_on_weight", using: :btree

end
