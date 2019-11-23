# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Cat.destroy_all

cat_1 = Cat.create(
  birth_date: Date.new(2001, 2, 3),
  color: "gray", 
  name: "Fuzz",
  sex: "M",
  description: "Fuzzy"
)

cat_2 = Cat.create(
  birth_date: Date.new(2003, 4, 19),
  color: "white", 
  name: "SSJ Goku",
  sex: "M",
  description: "Ascended Super Saiyajin"
)

cat_3 = Cat.create(
  birth_date: Date.new(1950, 3, 18),
  color: "red",
  name: "Superman",
  sex: "M",
  description: "Faster than a speeding bark bark"
)

cat_4 = Cat.create(
  birth_date: Date.new(2019, 11, 6),
  color: "black",
  name: "Mai",
  sex: "F",
  description: "Bunny girl hop hop"
)
