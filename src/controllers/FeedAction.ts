import { prisma } from "../prisma";

// GET /feed
export async function feedAction(request, response) {
  const publishedPosts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  });

  response.send(publishedPosts);
}
