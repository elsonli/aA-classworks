class Course < ApplicationRecord
  has_many :enrollments,
    primary_key: :id,
    foreign_key: :course_id,
    class_name: :Enrollment

  has_many :enrolled_students,
    through: :enrollments,
    source: :user

  belongs_to :prerequisite,
    primary_key: :id,
    foreign_key: :prereq_iq,
    class_name: :Course

  belongs_to :instructors,
    primary_key: :id,
    foreign_key: :instructor_id,
    class_name: :User
end
