import { prisma } from "../prisma";

// POST /post
//
// body
// title: string  – required
// content: string – optional
// authorEmail: string – required
export async function createDraftAction(req, res) {
  const { title, content, authorEmail } = req.body;

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    },
  });

  res.send(newPost);
}
