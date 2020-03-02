BEGIN;

DROP TABLE IF EXISTS GoT_Evil;
DROP TABLE IF EXISTS GoT_Heroes;

-- Table Definition
CREATE TABLE GoT_Heroes (
    "id" int4 NOT NULL DEFAULT nextval('untitled_table_192_id_seq'::regclass),
    "Name" varchar NOT NULL,
    "Defense" int8 NOT NULL,
    "Attack" int8 NOT NULL,
    "Alive" bool NOT NULL,
    "LifePoints" int8 NOT NULL,
    "Position" int8 NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE GoT_Evil (
  "id" int4 NOT NULL DEFAULT nextval('"Game of Tables : Evil_id_seq"'::regclass),
  "Name" text NOT NULL,
  "Defense" int2 NOT NULL,
  "Attack" int2 NOT NULL,
  "Alive" bool NOT NULL,
  "LifePoints" int2 NOT NULL,
  "Positions" int8,
  PRIMARY KEY ("id")
);

-- Information input
INSERT INTO GoT_Evil (id, Name, Defense, Attack, Alive, LifePoints, Position) VALUES
  (1,"Kefka",200,450,t,700,1);

INSERT INTO GoT_Heroes (id, Name, Defense, Attack, Alive, LifePoints, Position)
  (1,"Cloud",100,5,t,550,1
   2,"Noctis",50,150,t,800,1
   3,"Yuna",120,250,t,500,1);

COMMIT;
