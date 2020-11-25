import { prisma } from "../prisma";
// PUT /addPostToCategory
//
// query string
// postId: string  – required
// categoryId: string – required
export async function addPostToCategoryAction(req, res) {
  const { postId, categoryId } = req.query;

  const post = await prisma.post.update({
    data: {
      postsToCategories: {
        create: {
          category: {
            connect: { id: categoryId },
          },
        },
      },
    },
    where: {
      id: postId,
    },
  });

  res.send(post);
}
