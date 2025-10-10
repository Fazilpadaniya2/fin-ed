
create table  users (
  user_id     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email       text UNIQUE NOT NULL,
  username    text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);


create table  topics (
  topic_id  bigserial PRIMARY KEY,
  slug      text UNIQUE NOT NULL,
  title     text NOT NULL,
  summary   text
);


create table  scenes (
  scene_id     bigserial PRIMARY KEY,
  topic_id     bigint NOT NULL REFERENCES topics(topic_id) ON DELETE CASCADE,
  position     int NOT NULL DEFAULT 0,
  title        text NOT NULL,
  description  text NOT NULL DEFAULT 'just get in',
  UNIQUE (topic_id, position)  
);

CREATE INDEX  idx_scenes_topic_pos ON scenes(topic_id, position);

-- ACTS
create table  acts (
  act_id            bigserial PRIMARY KEY,
  scene_id          bigint NOT NULL REFERENCES scenes(scene_id) ON DELETE CASCADE,
  position          int NOT NULL DEFAULT 0,        
  title             text NOT NULL,
  xp_reward         int NOT NULL DEFAULT 10,
  story_description text,
  question          boolean NOT NULL DEFAULT false,
  UNIQUE (scene_id, position)  

CREATE INDEX  idx_acts_scene_pos ON acts(scene_id, position);


create table  questions (
  question_id  bigserial PRIMARY KEY,
  act_id       bigint NOT NULL REFERENCES acts(act_id) ON DELETE CASCADE,
  question     text NOT NULL,
  explanation  text
);

CREATE INDEX  idx_questions_act ON questions(act_id);


create table  choices (
  id           bigserial PRIMARY KEY,
  question_id  bigint NOT NULL REFERENCES questions(question_id) ON DELETE CASCADE,
  label        text NOT NULL,
  is_correct   boolean NOT NULL DEFAULT false
);

CREATE INDEX  idx_choices_question ON choices(question_id);


create table  user_progress (
  user_id      uuid   NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  scene_id     bigint NOT NULL REFERENCES scenes(scene_id) ON DELETE CASCADE,
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, scene_id)
);

CREATE INDEX  idx_progress_user_last ON user_progress(user_id, last_seen_at);
