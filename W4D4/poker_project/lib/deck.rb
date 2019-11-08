require_relative "./card.rb"

class Deck
  attr_reader :deck, :count

  VALUES = { 
    ace:   14,
    two:    2,
    three:  3,
    four:   4,
    five:   5,
    six:    6,
    seven:  7,
    eight:  8,
    nine:   9,
    ten:   10,
    jack:  11,
    queen: 12,
    king:  13
  }

  SUITS = { 
    spade:   4,
    heart:   3,
    club:    2,
    diamond: 1,
  }

  def initialize
    @deck = []
    Deck::VALUES.each_key do |face_value|
      Deck::SUITS.each_key do |suit|
        @deck << Card.new(face_value, suit)
      end
    end
    @count = @deck.length
  end
end