'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import queryString from 'query-string';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { useDebounce } from '@/utils/useDebouce';

const Searchbar = () => {
  const [value, setValue] = useState('');

  const Router = useRouter();
  const searchQueries = useSearchParams();

  const searchCateID = searchQueries.get('categoryId');
  const searchText = searchQueries.get('name');

  const debounceInput = useDebounce(value, 1000);

  const changeHandler = (e) => {
    console.log('working');
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debounceInput,
      categoryID: searchCateID,
    };

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    Router.push(url);
  }, [Router, searchCateID, debounceInput]);
  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        className="pl-10 bg-primary/10"
        placeholder="Search..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Searchbar;
