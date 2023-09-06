'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';

const Category = ({ data }) => {
  const Router = useRouter();
  const serachQueries = useSearchParams();

  const searchCateID = serachQueries.get('categoryId');

  const clickHandler = (id) => {
    const query = { categoryId: id };

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    Router.push(url);
  };

  return (
    <div className="w-full flex justify-end space-x-2 p-2 overflow-x-auto">
      {data.map((item) => {
        const { name, id } = item;

        return (
          <button
            key={id}
            className={`flex items-center text-center bg-primary/10 rounded-md px-2 py-2 text-xs md:text-sm  md:px-4 md:py-3 hover:opacity-75 transition         ${
              id === searchCateID ? 'bg-pink-600/50' : 'bg-primary/10'
            }`}
            onClick={() => clickHandler(id)}
          >
            {name}
          </button>
        );
      })}
      <button
        className={`flex items-center text-center bg-red-500/20 rounded-md px-2 py-2 text-xs md:text-sm md:px-4 md:py-3 hover:bg-red-600/50 transition
        `}
        onClick={() => clickHandler(undefined)}
      >
        Reset
      </button>
    </div>
  );
};

export default Category;
