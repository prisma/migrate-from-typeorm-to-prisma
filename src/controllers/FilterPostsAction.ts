import { getManager, Like } from "typeorm";
import { Post } from "../entity/Post";


// GET /filterPosts
//
// query string
// searchString: string - optional
export async function filterPostsAction(req, res) {
  const { searchString } = req.query
  const postRepository = getManager().getRepository(Post);

  const filteredPosts = await postRepository.find({
    where: [
      { title: Like(`%${searchString}%`) },
      { content: Like(`%${searchString}%`) },
    ],
  });

  res.send(filteredPosts);
}
