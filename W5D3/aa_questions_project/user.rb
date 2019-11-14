require_relative 'question_follows.rb'

class User
    attr_accessor :id, :fname, :lname

    def self.find_by_id(id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT * FROM users WHERE id = ?
        SQL
        User.new(thing.first)
    end

    def self.find_by_name(fname, lname)
        person = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
            SELECT * FROM users WHERE fname = ? AND lname = ?
        SQL
        User.new(person.first)
    end

    def authored_questions(author_id)
        Questions.find_by_author_id(author_id)
    end

    def authored_replies(user_id)
        Replies.find_by_user_id(user_id)
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def followed_questions
        QuestionFollows.followed_questions_for_user_id(self.id)
    end
end