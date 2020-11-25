import { prisma } from "../prisma";

export async function setBioForUserAction(req, res) {
  const { userId } = req.params;
  const { bio } = req.body;

  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      profile: {
        update: {
          bio,
        },
      },
    },
  });

  res.send(user);
}
