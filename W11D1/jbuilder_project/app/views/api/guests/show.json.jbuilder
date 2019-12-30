json.extract! @guest, :name, :age, :favorite_color

json.gifts @guest.gifts do |gift|
  json.description gift.description
  json.title gift.title
end