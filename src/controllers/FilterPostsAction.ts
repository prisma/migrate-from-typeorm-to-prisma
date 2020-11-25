import { prisma } from "../prisma";

// GET /filterPosts
//
// query string
// searchString: string - optional
export async function filterPostsAction(req, res) {
  const { searchString } = req.query;

  const filteredPosts = prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: searchString } },
        { content: { contains: searchString } },
      ],
    },
  });

  res.send(filteredPosts);
}
