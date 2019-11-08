require "card"

describe Card do 
  subject(:test_card) { Card.new(:ace, :spade) }

  describe "#initialize" do 
    it "sets a value for the card" do 
      expect(test_card.value).to eq(:ace)
    end
    it "sets a suit for the card" do
      expect(test_card.suit).to eq(:spade)
    end

  end



end