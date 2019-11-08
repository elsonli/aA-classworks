require "first_tdd_project"

describe "#remove_dups" do 
  subject(:array) { [1, 2, 1, 3, 3] }

  it "accept an array as an argument" do 
    expect { remove_dups("string") }.to raise_error(ArgumentError)
    expect { remove_dups(array) }.to_not raise_error
  end

  it "removes duplicates from the array" do
    expect(remove_dups(array)).to eq([1, 2, 3])
  end

  it "does not mutate the original array" do
    remove_dups(array)
    expect(array).to_not eq([1, 2, 3])
  end
end

describe "#two_sum" do
  subject(:array) { [-1, 0, 2, -2, 1] }

  it "accept an array as an argument" do 
    expect { two_sum("string") }.to raise_error(ArgumentError)
    expect { remove_dups(array) }.to_not raise_error
  end

  it "finds all pairs of positions where the elements at those positions sum to zero" do
    expect(two_sum(array)).to eq([[0, 4], [2, 3]])
  end

  it "add smaller elements before bigger elements" do
    expect(two_sum(array)).to eq(two_sum(array).sort)
  end
end

describe "#my_transpose" do
  subject(:grid) { [[0, 1, 2], [3, 4, 5], [6, 7, 8]] }
  let(:new_grid) { [[0, 3, 6], [1, 4, 7], [2, 5, 8]] }

  it "flips rows and columns" do
    expect(my_transpose(grid)).to eq(new_grid)
  end
end

describe "stock_picker" do
  subject(:array) { [5, 7, 8, 15, 10, 15] }
  let(:array_1) { [15, 1, 9, 8] }

  it "accept an array as an argument" do 
    expect { stock_picker("string") }.to raise_error(ArgumentError)
  end

  it "should not sell stock before buying it" do
    expect(stock_picker(array_1)).to_not eq([2, 0])
  end

  it "returns the correct outputs" do
    expect(stock_picker(array_1)).to eq([1, 2])
  end
end