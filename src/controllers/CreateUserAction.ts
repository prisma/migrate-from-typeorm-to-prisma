import { prisma } from "../prisma";

// POST /user
//
// body
// name: string  – optional
// email: string – required
export async function createUserAction(req, res) {
  const { name, email } = req.body;

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.send(newUser);
}
