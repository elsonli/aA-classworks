# Recursion: Range
def recursive_range(start_num, end_num)
    return [] if end_num <= start_num
    [start_num] + recursive_range(start_num + 1, end_num)
end

# Iteration: Array Sum
def iterative_sum(arr)
    arr.inject(0) { |sum, ele| sum + ele }
end

# Recursion: Array Sum
def recursive_sum(arr)
    return 0 if arr.empty?
    arr[0] + recursive_sum(arr[1..-1])
end

# Recursion 1: Exponentiation
def recursive_exponentiation_1(base, exponent)
    return 1 if exponent == 0
    base * recursive_exponentiation_1(base, exponent - 1)
end

# Recursion 2: Exponentiation
def recursive_exponentiation_2(base, exponent)
    return 1 if exponent == 0
    if exponent.even?
        new_exponent = exponent / 2
        recursive_result = recursive_exponentiation_2(base, new_exponent)
        return recursive_result * recursive_result
    else
        new_exponent = (exponent - 1) / 2
        recursive_result = recursive_exponentiation_2(base, new_exponent)
        return base * recursive_result * recursive_result
    end
end

# Recursion: Array Deep Duplicate
def recursive_deep_dup(arr)
    return arr unless arr.is_a?(Array)
    
    new_arr = []
    arr.each { |ele| new_arr << recursive_deep_dup(ele) }
    new_arr
end

# Iteration: Fibonacci
def iterative_fibonacci(num)
    return [] if num <= 0
    return [0] if num == 1

    fib_arr = [0, 1]
    while fib_arr.length < num
        fib_arr << fib_arr[-1] + fib_arr[-2]
    end
    fib_arr
end

# Recursion: Fibonacci
def recursive_fibonacci(num)
    return [] if num <= 0
    return [0] if num == 1
    return [0, 1] if num == 2

    prev_fib = recursive_fibonacci(num - 1)
    prev_fib << [prev_fib[-2] + prev_fib[-1]]
end

# Recursion: Binary Search
def recursive_binary_search(arr, target)
    return nil if arr.empty?

    middle_idx = arr.length / 2
    if arr[middle_idx] == target
        return middle_idx
    elsif arr[middle_idx] > target
        subarr = arr[0...middle_idx]
        return recursive_binary_search(subarr, target)
    else
        offset = middle_idx + 1
        subarr = arr[offset..-1]
        result = recursive_binary_search(subarr, target)
        return result.nil? ? nil : result + offset
    end
end

# Recursion: Merge Sort
def recursive_merge_sort(arr)
    return arr if (arr.length == 0) or (arr.length == 1)

    middle_idx = arr.length / 2
    subarr_1 = arr[0...middle_idx]
    subarr_2 = arr[middle_idx..-1]
    merged_left = recursive_merge_sort(subarr_1)
    merged_right = recursive_merge_sort(subarr_2)
    merge_two_subarrays(merged_left, merged_right)
end

def merge_two_subarrays(subarr_1, subarr_2)
    subarr_1_copy = subarr_1.dup
    subarr_2_copy = subarr_2.dup
    merged_arr = []
    until (subarr_1_copy.empty?) or (subarr_2_copy.empty?)
        if subarr_1_copy.first <= subarr_2_copy.first
            merged_arr << subarr_1_copy.shift
        else
            merged_arr << subarr_2_copy.shift
        end
    end
    merged_arr + subarr_1_copy + subarr_2_copy
end

# Recursion: Array Subsets
def recursive_array_subsets(arr)
    return arr if arr.empty?

    # Modify subsets by passing it into the helper function
    # Sorting is optional, but makes the output look more orderly
    subsets = []
    recursive_array_subsets_helper(arr, [], subsets)
    subsets.sort
end

def recursive_array_subsets_helper(arr, curr_arr, subsets)

    # Subsets is modified after all recursive calls are made
    if arr.length == curr_arr.length
        subsets << curr_arr.compact
        return
    end

    # Decision made to not include the current element into the array
    # No need to store recursive result because subsets is directly modified
    nil_appended_arr = curr_arr.dup
    nil_appended_arr << nil
    recursive_array_subsets_helper(arr, nil_appended_arr, subsets)

    # Decision made to include the current element into the array
    # No need to store recursive result because subsets is directly modified
    ele_appended_arr = curr_arr.dup
    ele_appended_arr << arr[curr_arr.length]
    recursive_array_subsets_helper(arr, ele_appended_arr, subsets)
end

# Recursion: Permutations
def recursive_permutations(arr)

    # Modify permutations by passing it into the helper function
    # Sorting is optional, but makes the output look more orderly
    permutations = []
    recursive_permutations_helper(arr, [], permutations, arr.length)
    permutations.sort
end

def recursive_permutations_helper(arr, curr_arr, permutations, original_length)

    # Do not want to modify the original array
    # Permutations is modified after all recursive calls are made
    arr_copy = arr.dup
    if curr_arr.length == original_length
        permutations << curr_arr
        return
    end

    # Need to eventually add all of the elements into the permutation
    # Keep all of the elements except for one and pass that recursively
    (0...arr_copy.length).each do |idx|
        arr_without_ele = arr_copy[0...idx] + arr_copy[idx+1..-1]
        recursive_permutations_helper(arr_without_ele, curr_arr + [arr[idx]], permutations, original_length)
    end
end

# Recursion: Make change greedily (array) given an amount
def recursive_greedy_make_change(amount, coins = [25, 10, 5, 1])
    return [] if amount == 0

    if amount >= coins.first
        new_amount = amount - coins.first
        return [coins.first] + recursive_greedy_make_change(new_amount, coins)
    else
        return recursive_greedy_make_change(amount, coins[1..-1])
    end
end

def recursive_non_greedy_make_change(amount, coins = [25, 10, 5, 1])
    combinations = []
    recursive_non_greedy_make_change_helper(amount, coins, [], combinations)
    unique_combinations = combinations.map { |combination| combination.sort.reverse }.uniq

    # Process combinations
    unique_combinations.sort_by(&:length).first
end

def recursive_non_greedy_make_change_helper(amount, coins, curr_coins, combinations)
    if (amount - curr_coins.sum) == 0
        combinations << curr_coins
        return
    end

    # Do not want to modify the current coins array
    # Permutations is modified after all recursive calls are made
    curr_coins_copy = curr_coins.dup
    coins.each do |coin|
        if (amount - curr_coins_copy.sum) >= coin
            curr_coins_copy << coin
            recursive_non_greedy_make_change_helper(amount, coins, curr_coins_copy, combinations)
        else
            recursive_non_greedy_make_change_helper(amount, coins[1..-1], curr_coins, combinations)
        end
    end
end