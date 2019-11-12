class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    unless self.include?(key)
      resize! if @count >= num_buckets
      self[key.hash] << key
      @count += 1
    end
  end

  def include?(key)
    self[key.hash].include?(key)
  end

  def remove(key)
    if self.include?(key)
      delete_idx = self[key.hash].index(key)
      self[key.hash].delete_at(delete_idx)
      @count -= 1
    end
  end

  private
  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    # Create a new array with double the elements
    arr = Array.new(num_buckets * 2) { Array.new }
    @store.flatten.each { |ele| arr[ele.hash % (num_buckets * 2)] << ele }
    @store = arr
  end
end
