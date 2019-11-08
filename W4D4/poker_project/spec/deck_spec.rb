require "deck"

describe Deck do

  let(:suits) { {
    spade:   4,
    heart:   3,
    club:    2,
    diamond: 1
    }
  }

  let(:values) { {
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
  }

  describe "sets up Deck::VALUES to be a hash of symbols to values" do 
    it "correctly initializes a values hash" do 
      expect(Deck::VALUES).to eq(values)
    end
  end

  describe "sets up Deck::SUITS to be a hash of symbols to suits" do 
    it "correctly initializes a suits hash" do 
      expect(Deck::SUITS).to eq(suits)
    end
  end

  describe "#initialize" do
    subject(:deck) { Deck.new }

    it "correctly initializes a new deck with 52 cards" do
      expect(deck.count).to eq(52)
    end
  end
end