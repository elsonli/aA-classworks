PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT null,
    lname TEXT NOT null
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT null,
    body TEXT NOT null,
    author INTEGER NOT null,

    FOREIGN KEY (author) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    users_id INTEGER NOT null,
    question_id INTEGER NOT null,

    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT null,
    parent_id INTEGER,
    user_id INTEGER NOT null,
    reply_body TEXT NOT null,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_id) REFERENCES replies(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    user INTEGER NOT null,
    question INTEGER NOT null,

    FOREIGN KEY (user) REFERENCES users(id),
    FOREIGN KEY (question) REFERENCES questions(id)
);

INSERT INTO 
    users (fname, lname)
VALUES
    ('Bob', 'Bobby'),
    ('Ricky', 'Bobby');

INSERT INTO
    questions (title, body, author)
VALUES
    ('question 1', 'body 1', 1),
    ('question 2', 'body 2', 2);

INSERT INTO
    question_follows (users_id, question_id)
VALUES
    (1, 2),
    (2, 2);

INSERT INTO
    replies (question_id, parent_id, user_id, reply_body)
VALUES
    (1, 2, 1, 'wow'),
    (2, 1, 2, 'what');

INSERT INTO
    question_likes (user, question)
VALUES
    (1, 2),
    (2, 2);

    






    
