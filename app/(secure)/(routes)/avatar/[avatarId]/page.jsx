import AvatarForm from '@/components/Form';
import prisma from '@/utils/db';

const Avatarpage = async ({ params }) => {
  const avatar = await prisma.avatar.findUnique({
    where: {
      id: params.avatarId,
    },
  });

  const categories = await prisma.category.findMany();
  return <AvatarForm avatarData={avatar} category={categories} />;
};

export default Avatarpage;
