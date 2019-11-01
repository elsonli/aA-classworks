# ### Factors
#
# Write a method `factors(num)` that returns an array containing all the
# factors of a given number.

def factors(num)
    (1..num).select { |factor| num % factor == 0 }
end

# ### Bubble Sort
#
# http://en.wikipedia.org/wiki/bubble_sort
#
# Implement Bubble sort in a method, `Array#bubble_sort!`. Your method should
# modify the array so that it is in sorted order.
#
# > Bubble sort, sometimes incorrectly referred to as sinking sort, is a
# > simple sorting algorithm that works by repeatedly stepping through
# > the list to be sorted, comparing each pair of adjacent items and
# > swapping them if they are in the wrong order. The pass through the
# > list is repeated until no swaps are needed, which indicates that the
# > list is sorted. The algorithm gets its name from the way smaller
# > elements "bubble" to the top of the list. Because it only uses
# > comparisons to operate on elements, it is a comparison
# > sort. Although the algorithm is simple, most other algorithms are
# > more efficient for sorting large lists.
#
# Hint: Ruby has parallel assignment for easily swapping values:
# http://rubyquicktips.com/post/384502538/easily-swap-two-variables-values
#
# After writing `bubble_sort!`, write a `bubble_sort` that does the same
# but doesn't modify the original. Do this in two lines using `dup`.
#
# Finally, modify your `Array#bubble_sort!` method so that, instead of
# using `>` and `<` to compare elements, it takes a block to perform the
# comparison:
#
# ```ruby
# [1, 3, 5].bubble_sort! { |num1, num2| num1 <=> num2 } #sort ascending
# [1, 3, 5].bubble_sort! { |num1, num2| num2 <=> num1 } #sort descending
# ```
#
# #### `#<=>` (the **spaceship** method) compares objects. `x.<=>(y)` returns
# `-1` if `x` is less than `y`. If `x` and `y` are equal, it returns `0`. If
# greater, `1`. For future reference, you can define `<=>` on your own classes.
#
# http://stackoverflow.com/questions/827649/what-is-the-ruby-spaceship-operator

class Array
    def bubble_sort!(&prc)
        prc ||= Proc.new { |arg1, arg2| arg1 <=> arg2 }

        sorted = false
        while !sorted
            sorted = true
            (0...self.length - 1).each do |idx|
                if prc.call(self[idx], self[idx+1]) == 1
                    self[idx], self[idx+1] = self[idx+1], self[idx]
                    sorted = false
                end
            end
        end
        self
    end

    def bubble_sort(&prc)
        arr_copy = self.dup
        arr_copy.bubble_sort!(&prc)
    end
end

# ### Substrings and Subwords
#
# Write a method, `substrings`, that will take a `String` and return an
# array containing each of its substrings. Don't repeat substrings.
# Example output: `substrings("cat") => ["c", "ca", "cat", "a", "at",
# "t"]`.
#
# Your `substrings` method returns many strings that are not true English
# words. Let's write a new method, `subwords`, which will call
# `substrings`, filtering it to return only valid words. To do this,
# `subwords` will accept both a string and a dictionary (an array of
# words).

def substrings(string)
    subs = []
    (0...string.length).each do |start_idx|
        (start_idx...string.length).each do |end_idx|
            subs << string[start_idx..end_idx]
        end
    end
    subs
end

def subwords(string, words)
    substrings(string).select { |substring| words.include?(substring) }.uniq
end

# ### Doubler
# Write a `doubler` method that takes an array of integers and returns an
# array with the original elements multiplied by two.

def doubler(arr)
    arr.map { |ele| 2 * ele }
end

# ### My Each
# Extend the Array class to include a method named `my_each` that takes a
# block, calls the block on every element of the array, and then returns
# the original array. Do not use Enumerable's `each` method. I want to be
# able to write:
#
# ```ruby
# # calls my_each twice on the array, printing all the numbers twice.
# return_value = [1, 2, 3].my_each do |num|
#   puts num
# end.my_each do |num|
#   puts num
# end
# # => 1
#      2
#      3
#      1
#      2
#      3
#
# p return_value # => [1, 2, 3]
# ```

class Array
    def my_each(&prc)
        counter = 0
        while counter < self.length
            prc.call(self[counter])
            counter += 1
        end
        self
    end
end

# ### My Enumerable Methods
# * Implement new `Array` methods `my_map` and `my_select`. Do
#   it by monkey-patching the `Array` class. Don't use any of the
#   original versions when writing these. Use your `my_each` method to
#   define the others. Remember that `each`/`map`/`select` do not modify
#   the original array.
# * Implement a `my_inject` method. Your version shouldn't take an
#   optional starting argument; just use the first element. Ruby's
#   `inject` is fancy (you can write `[1, 2, 3].inject(:+)` to shorten
#   up `[1, 2, 3].inject { |sum, num| sum + num }`), but do the block
#   (and not the symbol) version. Again, use your `my_each` to define
#   `my_inject`. Again, do not modify the original array.

class Array
    def my_map(&prc)
        new_arr = []
        self.my_each do |ele|
            new_arr << prc.call(ele)
        end
        new_arr
    end

    def my_select(&prc)
        new_arr = []
        self.my_each do |ele|
            new_arr << ele if prc.call(ele)
        end
        new_arr
    end

    def my_reject(&prc)
        self.my_select { |ele| !prc.call(ele) }
    end

    def my_any?(&prc)
        self.my_each { |ele| return true if prc.call(ele) }
        false
    end

    def my_all?(&prc)
        self.my_each { |ele| return false if !prc.call(ele) }
        true
    end

    def my_inject(&prc)
        accum = self[0]
        (1...self.length).each { |idx| accum = prc.call(accum, self[idx]) }
        accum
    end

    def my_flatten
        return [self] unless self.is_a?(Array)

        flattened = []
        self.my_each do |ele|
            if ele.is_a?(Array)
                flattened += ele.my_flatten
            else
                flattened += [ele]
            end
        end
        flattened
    end

    def my_zip(*args)
        # Final zipped array
        zip_arr = []

        # Repeat this process self.length times
        self.length.times do

            # Construct one subarray
            zip_sub_arr = [self.shift]
            args.each do |sub_arr|
                if sub_arr.empty?
                    zip_sub_arr << nil
                else
                    zip_sub_arr << sub_arr.shift
                end
            end
            zip_arr << zip_sub_arr

        end
        zip_arr
    end

    def my_rotate(amt = 1)
        amt = amt % self.length
        if amt < 0
            left = self[amt..-1]
            right = self[0...amt]
            return left + right
        else
            left = self[amt..-1]
            right = self[0...amt]
            return left + right
        end
    end

    def my_join(sep = "")
        new_str = ""
        self.my_each { |ele| new_str += ele.to_s + sep }
        sep.empty? ? new_str : new_str[0...-sep.length]
    end

    def my_reverse
        new_arr = []
        (0...self.length).each { |idx| new_arr << self[self.length - idx - 1] }
        new_arr
    end
end

# ### Concatenate
# Create a method that takes in an `Array` of `String`s and uses `inject`
# to return the concatenation of the strings.
#
# ```ruby
# concatenate(["Yay ", "for ", "strings!"])
# # => "Yay for strings!"
# ```

def concatenate(strings)
    strings.inject("") { |final_str, substr| final_str + substr }
end
