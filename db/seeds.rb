# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Campaign.destroy_all
Event.destroy_all
Contribution.destroy_all

user1 = User.create(username: "Porfy", password: "password", email: "porfirio.matias@outlook.com")
user2 = User.create(username: "Pavel", password: "pass1234", email: "pavel.payano@gmail.com")

camp1 = Campaign.create(user_id: user1.id, name: "Juana for Congress")
camp2 = Campaign.create(user_id: user2.id, name: "Juana for Congress")

event1 = Event.create(user_id: user1.id, campaign_id: camp1.id, name: "Terra Luna Fundraiser", venue: "Terra Luna", city: "Lawrence", state: "MA")
event2 = Event.create(user_id: user2.id, campaign_id: camp2.id, name: "Terra Luna Event", venue: "Terra Luna", city: "Lawrence", state: "MA")

Contribution.create(event_id: event1.id, first_name: "Joel", last_name: "Matias", amount: 50, date: "11/06/2017", contribution_type: "Check") 
Contribution.create(event_id: event2.id, first_name: "Marelin", last_name: "Matias", amount: 50, date: "11/06/2017", contribution_type: "CC") 