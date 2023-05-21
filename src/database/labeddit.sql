-- Active: 1684503457069@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME()) NOT NULL
);

DELETE FROM users WHERE (email = "rottschaefer54@gmail.com");

INSERT INTO users (id, name, email, password, role)
VALUES("u001","EDU","rott@gmail","12345","admin");

SELECT*FROM users;

CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER NOT NULL,
    dislikes INTEGER NOT NULL,
    created_at TEXT DEFAULT(DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT(DATETIME()) NOT NULL,
    Foreign Key (creator_id) REFERENCES users(id)
  );

-- DROP TABLE posts;

  INSERT INTO posts (id, creator_id, content, likes, dislikes)
  VALUES ("p001", "u001", "Bananinha", 10, 2);

  SELECT * FROM posts;

DELETE FROM posts WHERE (id = "a9c9a69e-e554-4981-a2e6-234bec2e9343");


  CREATE TABLE likes_dislikes (
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    like INTEGER NOT NULL,
    Foreign Key (user_id) REFERENCES users(id),
    Foreign Key (post_id) REFERENCES posts(id)
  );

-- DROP TABLE likes_dislikes;

SELECT * FROM likes_dislikes;

-- DROP TABLE likes_dislikes;
