# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# shakin = Bakery.create(name: "Shakin' Bakin'", address: "10 Cloverfield Lane, Dallas, Texas")
# son = Bakery.create(name: "Son Of A Bake", address: "22 Magnet lane, Charleton, South Carolina")
# bake = Bakery.create(name: "Bake Lives Here", address: "55 Wallace street, Atlanta, Georgia")
# simple = Bakery.create(name: "Simple Bake", address: "2458 Walnut drive, L.A., California")
puts " Seeding spices..."
User.delete_all
BakedGood.delete_all
Review.delete_all

tarleton = User.create!(username: "tarleton", password: "tarleton8000", bio: "Baker")
jacob = User.create!(username: "jacob", password: "tarleton8000", bio: "Blogger")
john = User.create!(username: "john", password: "tarleton8000", bio: "I have been baking for ten years")
james = User.create!(username: "james", password: "tarleton8000", bio: "I bake for fun")

powerpuffs = BakedGood.create!(title: "Power Puffs", instructions: "test instructions for change")
cake = BakedGood.create!(title: "Cake", instructions: "test instructions")

powerpuffsreview = Review.create!(review: "Amazing", user_id: tarleton.id, baked_good_id: powerpuffs.id)
powerpuffsreview = Review.create!(review: "Wow, I can't Belive the flavor", user_id: jacob.id, baked_good_id: powerpuffs.id)

cakereview = Review.create!(review: "Bangin Cake", user_id: jacob.id, baked_good_id: cake.id)
cakereview = Review.create!(review: "Fantastic", user_id: john.id, baked_good_id: cake.id)

puts " Done seeding!"