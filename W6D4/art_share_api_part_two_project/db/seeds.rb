# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create some Users
User.create(username: 'Elson')
User.create(username: 'Anne')
User.create(username: 'Ronil')

# Create some Artworks
Artwork.create(
  title: 'Mona Lisa',
  artist_id: 1,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/300px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
)

Artwork.create(
  title: 'Starry Night',
  artist_id: 2,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/300px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
)

Artwork.create(
  title: 'The Persistence of Memory',
  artist_id: 3,
  image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/300px-The_Persistence_of_Memory.jpg'
)

Artwork.create(
  title: 'The Last Supper',
  artist_id: 1,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg/300px-Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg'
)

Artwork.create(
  title: 'Girl with a Pearl Earring',
  artist_id: 2,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/300px-Meisje_met_de_parel.jpg'
)

# Share Artworks with Users
# Artwork_1: User_2
# Artwork_2: User_1
# Artwork_3: 
# Artwork_4: User_2
# Artwork_5: User_1, User_3
ArtworkShare.create(
  artwork_id: 1,
  viewer_id: 2
)

ArtworkShare.create(
  artwork_id: 4,
  viewer_id: 2
)

ArtworkShare.create(
  artwork_id: 5,
  viewer_id: 1
)

ArtworkShare.create(
  artwork_id: 5,
  viewer_id: 3
)

ArtworkShare.create(
  artwork_id: 2,
  viewer_id: 1
)

# Create some Comments
# Artwork_1: User_2, User_3
# Artwork_2: User_1
# Artwork_3: 
# Artwork_4: User_3
# Artwork_5: User_2
Comment.create(
  user_id: 1,
  artwork_id: 2,
  body: 'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.'
)

Comment.create(
  user_id: 2,
  artwork_id: 5,
  body: 'People who think they know everything are a great annoyance to those of us who do.'
)

Comment.create(
  user_id: 3,
  artwork_id: 4,
  body: 'It does not matter how slowly you go as long as you do not stop.'
)

Comment.create(
  user_id: 2,
  artwork_id: 1,
  body: 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.'
)

Comment.create(
  user_id: 3,
  artwork_id: 1,
  body: 'Procrastination is the art of keeping up with yesterday.'
)