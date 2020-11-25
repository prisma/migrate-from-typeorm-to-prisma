import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Post } from "../entity/Post";

// GET /feed
export async function feedAction(request: Request, response: Response) {
  const postRepository = getManager().getRepository(Post);

  const publishedPosts = await postRepository.find({
    where: { published: true },
  });

  response.send(publishedPosts);
}
