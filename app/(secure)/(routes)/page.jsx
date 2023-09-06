import Category from '@/components/Category';
import Searchbar from '@/components/Search';
import prisma from '@/utils/db';

const page = async () => {
  const fetcherData = await prisma.category.findMany();
  return (
    <section className="h-full p-4 space-y-2">
      <Searchbar />
      <Category data={fetcherData} />
    </section>
  );
};

export default page;
