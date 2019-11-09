# First, write a function that compares each element to every other element of
# the list. Return the element if all other elements in the array are larger.
# What is the time complexity for this function?
def my_min(arr)
  arr.each do |ele_1|
    return ele_1 if arr.all? { |ele_2| ele_1 <= ele_2 }
  end
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5
# Runtime Complexity: O(n^2)

# Now rewrite the function to iterate through the list just once while keeping
# track of the minimum. What is the time complexity?
def my_min_2(arr)
  smallest = arr.first
  arr.drop(1).each { |ele| smallest = ele if ele < smallest }
  smallest
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min_2(list)  # =>  -5
# Runtime Complexity: O(n)

# You have an array of integers and you want to find the largest contiguous
# (together in sequence) sub-sum. Find the sums of all contiguous sub-arrays
# and return the max.

# Write a function that iterates through the array and finds all sub-arrays
# using nested loops. First make an array to hold all sub-arrays. Then find
# the sums of each sub-array and return the max.
# Discuss the time complexity of this solution.

def largest_contiguous_subsum(arr)
  subs = []
  (0...arr.length).each do |idx_1|
    (0...arr.length).each do |idx_2|
      subs << arr[idx_1..idx_2] if idx_2 >= idx_1
    end
  end
  subs.map(&:sum).max
end

# arr_1 = [5, 3, -7] # 8
# arr_2 = [2, 3, -6, 7, -6, 7, -9, -2, 5, 10] # 15
# arr_2 = [-5, -1, -3] # -1
# p largest_contiguous_subsum(arr_1)
# p largest_contiguous_subsum(arr_2)
# p largest_contiguous_subsum(arr_2)
# Runtime Complexity: O(n^3)

# Let's make a better version. Write a new function using O(n) time with O(1)
# memory. Keep a running tally of the largest sum.
def largest_contiguous_subsum_2(arr)
  max_seen = arr.first
  curr_sum = arr.first
  arr.drop(1).each do |curr_ele|
    max_seen = curr_ele if max_seen < curr_ele
    curr_sum += curr_ele
    max_seen = curr_sum if max_seen < curr_sum
    curr_sum = 0 if curr_sum < 0
  end
  max_seen
end

# arr_1 = [5, 3, -7] # 8
# arr_2 = [2, 3, -6, 7, -6, 7, -9, -2, 5, 10] # 15
# arr_3 = [-5, -1, -3] # -1
# p largest_contiguous_subsum_2(arr_1)
# p largest_contiguous_subsum_2(arr_2)
# p largest_contiguous_subsum_2(arr_3)