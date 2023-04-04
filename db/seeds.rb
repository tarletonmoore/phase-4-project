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
puts " Seeding "
User.delete_all
BakedGood.delete_all
Review.delete_all

tarleton = User.create!(username: "tarleton", password: "tarleton8000", bio: "Baker")
jacob = User.create!(username: "jacob", password: "tarleton8000", bio: "Blogger")
john = User.create!(username: "john", password: "tarleton8000", bio: "I have been baking for ten years")
james = User.create!(username: "james", password: "tarleton8000", bio: "I bake for fun")
thomas = User.create!(username: "thomas", password: "tarleton8000", bio: "baking")
carl = User.create!(username: "carl", password: "tarleton8000", bio: "I bake")
tony = User.create!(username: "tony", password: "tarleton8000", bio: "lets bake")
smith = User.create!(username: "smith", password: "tarleton8000", bio: "I love to bake")



powerpuffs = BakedGood.create!(title: "Power Puffs", instructions: "sugar, spice, chemical x")
cake = BakedGood.create!(title: "Cake", instructions: "eggs, flour, sugar")
cookies = BakedGood.create!(title: "Cookies", instructions: "flour, sugar, chocolate chips")
cake2 = BakedGood.create!(title: "Carrot Cake", instructions: "eggs, flour, sugar, icing")
cake3 = BakedGood.create!(title: "Cheesecake", instructions: "eggs, flour, sugar")
cake4 = BakedGood.create!(title: "Chocolate Cake", instructions: "eggs, flour, sugar, chocolate")
cake5 = BakedGood.create!(title: "Butterfingers Cake", instructions: "eggs, flour, sugar, crushed butterfingers")
cake6 = BakedGood.create!(title: "Ice Cream Cake", instructions: "eggs, flour, sugar, cookies and cream ice cream")
cake7 = BakedGood.create!(title: "Hershey Cake", instructions: "eggs, flour, sugar, melted hershey bars")
cake8 = BakedGood.create!(title: "Reverse Cake", instructions: "eggs, flour, sugar, flip it upside down")

# tarletons reviews
Review.create!(review: "Amazing", user_id: tarleton.id, baked_good_id: powerpuffs.id)
Review.create!(review: "Wow, I can't Belive the flavor", user_id: tarleton.id, baked_good_id: cake.id)
Review.create!(review: "average cookies", user_id: tarleton.id, baked_good_id: cookies.id)
Review.create!(review: "fantastic cake", user_id: tarleton.id, baked_good_id: cake2.id)
Review.create!(review: "my favorite", user_id: tarleton.id, baked_good_id: cake3.id)

# jacob's reviews
Review.create!(review: "Bangin Cake", user_id: jacob.id, baked_good_id: cake.id)
Review.create!(review: "Fantastic", user_id: jacob.id, baked_good_id: cake2.id)
Review.create!(review: "Great flavor", user_id: jacob.id, baked_good_id: cake4.id)
Review.create!(review: "Love it", user_id: jacob.id, baked_good_id: cake5.id)
Review.create!(review: "Interesting taste", user_id: jacob.id, baked_good_id: cake6.id)

# john's reviews
Review.create!(review: "didn't like it", user_id: john.id, baked_good_id: cake2.id)
Review.create!(review: "disgusting", user_id: john.id, baked_good_id: cookies.id)
Review.create!(review: "how can someone like this", user_id: john.id, baked_good_id: cake4.id)
Review.create!(review: "I guess it was ok", user_id: jacob.id, baked_good_id: cake7.id)
Review.create!(review: "what even is that", user_id: jacob.id, baked_good_id: cake8.id)

# james' reviews
Review.create!(review: "Amazing", user_id: james.id, baked_good_id: powerpuffs.id)
Review.create!(review: "It was good", user_id: jacob.id, baked_good_id: cake2.id)

# thomas' reviews
Review.create!(review: "Basic", user_id: thomas.id, baked_good_id: cake.id)
Review.create!(review: "Love it", user_id: thomas.id, baked_good_id: cake6.id)

# carl's reviews
Review.create!(review: "mediocre", user_id: carl.id, baked_good_id: cookies.id)
Review.create!(review: "I enjoyed it", user_id: carl.id, baked_good_id: cake8.id)

# tony's reviews
Review.create!(review: "classic", user_id: tony.id, baked_good_id: powerpuffs.id)
Review.create!(review: "Incredible", user_id: tony.id, baked_good_id: cake5.id)

# smith's reviews
Review.create!(review: "I hated it", user_id: smith.id, baked_good_id: cake.id)
Review.create!(review: "I make it all the time", user_id: smith.id, baked_good_id: cake3.id)



puts " Done seeding!"