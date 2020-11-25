INSERT INTO "public"."user"("name", "email") VALUES('Alice', 'alice@prisma.io') RETURNING "id", "name", "email";
INSERT INTO "public"."user"("name", "email") VALUES('bob', 'bob@prisma.io') RETURNING "id", "name", "email";

INSERT INTO "public"."profile"("bio", "userId") VALUES('I like turtles', 1) RETURNING "id", "bio", "userId";
INSERT INTO "public"."profile"("bio", "userId") VALUES('I am Bob', 2) RETURNING "id", "bio", "userId";

INSERT INTO "public"."post"("title", "content", "published", "authorId") VALUES('Hello World', NULL, DEFAULT, 1) RETURNING "id";
INSERT INTO "public"."post"("title", "content", "published", "authorId") VALUES('Prisma vs TypeORM', 'Prisma has stronger type safery than TypeORM', true, 2) RETURNING "id";

INSERT INTO "public"."category"("name") VALUES('Greetings') RETURNING "id", "name";
INSERT INTO "public"."category"("name") VALUES('Random') RETURNING "id", "name";
INSERT INTO "public"."category"("name") VALUES('Tech') RETURNING "id", "name";

INSERT INTO "public"."post_categories_category"("postId", "categoryId") VALUES(1, 1) RETURNING "postId", "categoryId";
INSERT INTO "public"."post_categories_category"("postId", "categoryId") VALUES(1, 2) RETURNING "postId", "categoryId";
INSERT INTO "public"."post_categories_category"("postId", "categoryId") VALUES(2, 3) RETURNING "postId", "categoryId";
