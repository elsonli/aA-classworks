class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new("head")
    @tail = Node.new("tail")
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    (@head.next == @tail) && (@tail.prev == @head)
  end

  def get(key)
    self.each { |node| return node.val if key == node.key }
  end

  def include?(key)
    self.each { |node| return true if key == node.key }
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    @tail.prev.next = new_node
    new_node.prev = @tail.prev
    new_node.next = @tail
    @tail.prev = new_node
  end

  def update(key, val)
    self.each do |node|
      node.val = val if key == node.key
    end
  end

  def remove(key)
    if self.include?(key)
      self.each do |node|
        next unless key == node.key
        node.prev.next = node.next
        node.next.prev = node.prev
      end
    end
    self
  end

  def each
    dupe = self.first
    until dupe == @tail
      yield dupe
      dupe = dupe.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
