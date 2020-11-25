import { prisma } from "../prisma";

// GET /post/:postId
export async function getPostByIdAction(req, res) {
  const { postId } = req.params;

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  res.send(post);
}
