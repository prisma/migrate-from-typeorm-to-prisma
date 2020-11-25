import { getManager } from "typeorm";
import { User } from "../entity/User";

// POST /user
//
// body
// name: string  – optional
// email: string – required
export async function createUserAction(req, res) {
  const { name, email } = req.body

  const userRepository = getManager().getRepository(User);

  const newUser = new User()
  newUser.name = name
  newUser.email = email
  userRepository.save(newUser)

  res.send(newUser);
}
