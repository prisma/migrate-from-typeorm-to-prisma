import { getManager } from "typeorm";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

// POST /post
//
// body
// title: string  – required
// content: string – optional
// authorEmail: string – required
export async function createDraftAction(req, res) {
  const { title, content, authorEmail } = req.body

  const userRepository = getManager().getRepository(User);
  const user = await userRepository.findOne({ email: authorEmail })

  const postRepository = getManager().getRepository(Post);

  const newPost = new Post()
  newPost.title = title
  newPost.content = content
  newPost.author = user
  postRepository.save(newPost)

  res.send(newPost);
}
