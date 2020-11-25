import { getManager } from "typeorm";
import { Profile } from "../entity/Profile";
import { User } from "../entity/User";

// POST /user/:userId/profile
//
// HTTP body
// bio: string – required
export async function setBioForUserAction(req, res) {
  const { userId } = req.params;
  const { bio } = req.body;

  const userRepository = getManager().getRepository(User);
  const user = await userRepository.findOne(userId, {
    relations: ["profile"],
  });

  const profileRepository = getManager().getRepository(Profile);
  user.profile.bio = bio;

  profileRepository.save(user.profile);

  res.send(user);
}
