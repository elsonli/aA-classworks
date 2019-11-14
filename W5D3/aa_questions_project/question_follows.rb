class QuestionFollows
    attr_accessor :id, :users_id, :question_id

    def self.find_by_users_id(users_id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, users_id)
            SELECT * FROM question_follows WHERE users_id = ?
        SQL
        thing.map { |thingum| QuestionFollows.new(thingum) }
    end

    def self.find_by_question_id(question_id)
        question = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT * FROM question_follows WHERE question_id = ?
        SQL
        question.map { |questionum| QuestionFollows.new(questionum) }
    end
    
    def self.followers_for_question_id(question_id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT *
            FROM question_follows JOIN users ON users.id = users_id
            WHERE question_id = ?
        SQL
        thing.map { |thingum| User.new(thingum) }
    end

    def self.followed_questions_for_user_id(users_id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, users_id)
            SELECT *
            FROM question_follows JOIN questions ON author = users_id
            WHERE users_id = ?
        SQL
        thing.map { |thingum| Questions.new(thingum) }
    end

    def initialize(options)
        @id = options['id']
        @users_id = options['users_id']
        @question_id = options['question_id']
    end
end