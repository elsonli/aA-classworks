class QuestionLikes
    attr_accessor :id, :user_id, :question_id

    def self.find_by_id(id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT * FROM question_likes WHERE id = ?
        SQL
        thing.map { |thingum| QuestionLikes.new(thingum) }
    end

    def self.find_by_user_id(user)
        question = QuestionsDatabase.instance.execute(<<-SQL, user)
            SELECT * FROM question_likes WHERE user = ?
        SQL
        question.map { |questionum| QuestionLikes.new(questionum) }
    end

    def self.find_by_question_id(question)
        thing = QuestionsDatabase.instance.execute(<<-SQL, question)
            SELECT * FROM question_likes WHERE question = ?
        SQL
        thing.map { |thingum| QuestionLikes.new(thingum) }
    end

    def initialize(options)
        @id = options['id']
        @question_id = options['question']
        @user_id = options['user']
    end
end