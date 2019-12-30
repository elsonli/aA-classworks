json.array! @gifts do |gift|
  json.extract! gift, :description, :title
end