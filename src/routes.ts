import { feedAction } from "./controllers/FeedAction";
import { createUserAction } from "./controllers/CreateUserAction";
import { createDraftAction } from "./controllers/CreateDraftAction";
import { addPostToCategoryAction } from "./controllers/AddPostToCategoryAction";
import { setBioForUserAction } from "./controllers/SetBioForUserAction";
import { filterPostsAction } from "./controllers/FilterPostsAction";
import { getPostByIdAction } from "./controllers/GetPostByIdAction";


/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/feed",
    method: "get",
    action: feedAction,
  },
  {
    path: "/user",
    method: "post",
    action: createUserAction,
  },
  {
    path: "/post",
    method: "post",
    action: createDraftAction,
  },
  {
    path: "/addPostToCategory",
    method: "put",
    action: addPostToCategoryAction,
  },
  {
    path: "/user/:userId/profile",
    method: "post",
    action: setBioForUserAction,
  },
  {
    path: "/filterPosts",
    method: "get",
    action: filterPostsAction,
  },
  {
    path: "/post/:postId",
    method: "get",
    action: getPostByIdAction,
  },
];
