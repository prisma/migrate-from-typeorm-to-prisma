import { getManager } from "typeorm";
import { Post } from "../entity/Post";

// GET /post/:postId
export async function getPostByIdAction(req, res) {
  const { postId } = req.params
  const postRepository = getManager().getRepository(Post);

  const post = await postRepository.findOne(postId);

  res.send(post);
}
