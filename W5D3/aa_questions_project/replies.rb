class Replies
    attr_accessor :id, :question_id, :parent_id, :user_id, :reply_body

    def self.find_by_user_id(user_id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT * FROM replies WHERE user_id = ?
        SQL
        thing.map { |thingum| Replies.new(thingum) }
    end

    def self.find_by_question_id(question_id)
        question = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT * FROM replies WHERE question_id = ?
        SQL
        question.map { |questionum| Replies.new(questionum) }
    end

    def self.find_by_parent_id(parent_id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, parent_id)
            SELECT * FROM replies WHERE parent_id = ?
        SQL
        thing.map { |thingum| Replies.new(thingum) }
    end

    def author
        User.find_by_id(self.user_id)
    end

    def question
        Questions.find_by_question_id(self.question_id)
    end

    def parent_reply
        Replies.find_by_parent_id(self.parent_id)
    end

    def child_replies
        thing = QuestionsDatabase.instance.execute(<<-SQL, self.id)
            SELECT * FROM replies WHERE parent_id = ?
        SQL
        thing.map { |thingum| Replies.new(thingum) }
    end

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @parent_id = options['parent_id']
        @user_id = options['user_id']
        @reply_body = options['reply_body']
    end
end