require_relative 'question_follows.rb'

class Questions
    attr_accessor :id, :title, :body, :author_id

    def self.find_by_author_id(author_id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, author_id)
            SELECT * FROM questions WHERE author_id = ?
        SQL
        Questions.new(thing.first)
    end

    def self.find_by_title(title)
        question = QuestionsDatabase.instance.execute(<<-SQL, title)
            SELECT * FROM questions WHERE title = ?
        SQL
        Questions.new(question.first)
    end

    def self.find_by_question_id(question_id)
        thing = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT * FROM questions WHERE questions.id = ?
        SQL
        Questions.new(thing.first)
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author']
    end

    def followers
        QuestionFollows.followers_for_question_id(self.id)
    end
end