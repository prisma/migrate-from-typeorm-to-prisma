import { getManager } from "typeorm";
import { Post } from "../entity/Post";
import { Category } from "../entity/Category";

// PUT /addPostToCategory
//
// query string
// postId: string  – required
// categoryId: string – required
export async function addPostToCategoryAction(req, res) {
  const { postId, categoryId } = req.query

  const postRepository = getManager().getRepository(Post);
  const post = await postRepository.findOne(postId, {
    relations: ['categories']
  })

  const categoryRepository = getManager().getRepository(Category);
  const category = await categoryRepository.findOne(categoryId)

  post.categories.push(category)
  postRepository.save(post)

  res.send(post);
}
