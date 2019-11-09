# Write a method #first_anagram? that will generate and store all the possible
# anagrams of the first string. Check if the second string is one of these.
def first_anagram?(str_1, str_2)
  perms = str_1.chars.permutation.to_a
  perms.map! { |perm| perm.join("") }
  perms.include?(str_2)
end

# p first_anagram?("gizmo", "sally") # false
# p first_anagram?("elvis", "lives") # true
# Runtime Complexity: O(n*n!)
# Increasing the size of the string by 1 char introduces another (n + 1) spots
# where we can place that char (assuming n is the length of the string)

# Write a method #second_anagram? that iterates over the first string. For each
# letter in the first string, find the index of that letter in the second string
# (hint: use Array#find_index) and delete at that index. The two strings are
# anagrams if an index is found for every letter and the second string is empty
# at the end of the iteration.
def second_anagram?(str_1, str_2)
  str_1.each_char do |char|
    return false unless str_1.include?(str_2[0])
    str_2.chars.delete_at(str_2.index(char))
  end
  true
end

# p second_anagram?("gizmo", "sally") # false
# p second_anagram?("elvis", "lives") # true

# Write a method #third_anagram? that solves the problem by sorting both strings
# alphabetically. The strings are then anagrams if and only if the sorted
# versions are the identical.
def third_anagram?(str_1, str_2)
  sorted_str_1 = str_1.chars.sort.join
  sorted_str_2 = str_2.chars.sort.join
  sorted_str_1 == sorted_str_2
end

# p third_anagram?("gizmo", "sally") # false
# p third_anagram?("elvis", "lives") # true
# Runtime Complexity: O(nlogn)

# Write one more method #fourth_anagram?. This time, use two Hashes to store
# the number of times each letter appears in both words. Compare the resulting
# hashes.
def fourth_anagram?(str_1, str_2)
  str_1_hash = Hash.new(0)
  str_2_hash = Hash.new(0)
  str_1.each_char { |char| str_1_hash[char] += 1 }
  str_2.each_char { |char| str_2_hash[char] += 1 }
  str_1_hash == str_2_hash
end

p fourth_anagram?("gizmo", "sally") # false
p fourth_anagram?("elvis", "lives") # true
# Runtime Complexity: O(n)