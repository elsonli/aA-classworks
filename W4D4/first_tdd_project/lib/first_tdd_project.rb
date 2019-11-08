def remove_dups(arr)   
  raise ArgumentError.new("not an array") unless arr.is_a?(Array)

  new_arr = []
  i = 0
  while i < arr.length

    new_arr << arr[i] unless new_arr.include?(arr[i])
    i += 1
  end
  new_arr
end

def two_sum(arr)
  raise ArgumentError.new("not an array") unless arr.is_a?(Array)
  result = []
  arr.each_with_index do |el1, idx1|
    arr.each_with_index do |el2, idx2|
      if (idx2 > idx1) && (el1 + el2 == 0)
        result << [idx1, idx2]
      end
    end
  end
  result
end

def my_transpose(grid)
  height = grid.length
  width = grid[0].length
  result = Array.new(height) { Array.new(width) }

  (0...height).each do |row|
    (0...width).each do |col|
      result[row][col] = grid[col][row]
    end
  end
  result
end

def stock_picker(arr)
  raise ArgumentError.new("not an array") unless arr.is_a?(Array)
  result = [0, 0]

  (0...arr.length).each do |buy_date|
    (0...arr.length).each do |sell_date|
      if sell_date > buy_date && ((arr[sell_date] - arr[buy_date]) > (arr[result[1]] - arr[result[0]]))
        result = [buy_date, sell_date]
      end
    end
  end



  # new = result.sort_by { |pair| arr[pair.last] - arr[pair.first] }
  # new.first
  result
end