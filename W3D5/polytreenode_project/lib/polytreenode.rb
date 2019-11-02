class PolyTreeNode
    attr_reader :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)
        @parent.children.delete(self) unless @parent.nil?
        new_parent.children << self unless new_parent.nil?
        @parent = new_parent
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        raise "Not a child!" unless @children.include?(child_node)
        child_node.parent = nil
    end

    def dfs(target_value)
        return self if self.value == target_value
        self.children.each do |child_node|
            search_result = child_node.dfs(target_value)
            return search_result unless search_result.nil?
        end
        nil
    end

    def bfs(target_value)
        queue = [self]
        until queue.empty?
            test_node = queue.shift
            return test_node if test_node.value == target_value
            queue.concat(test_node.children)
        end
        nil
    end

    def inspect
        @value
    end
end