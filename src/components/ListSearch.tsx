import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { LIST_SEARCH_KEY as LIST_SEARCH_PARAM_KEY } from "../constant";

import { Input } from "antd";

const { Search } = Input;

const ListSearch: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  // 获取url 参数，并设置到input
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const newValue = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    setSearchValue(newValue);
  }, [searchParams]);

  const [searchValue, setSearchValue] = useState("");
  const onSearch = (value: string) => {
    nav({
      pathname: pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });

    // manage/list?keyword=abc
    // manage/list?keyword=abc&page=2
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Search
        placeholder="input survey title"
        allowClear
        value={searchValue}
        onSearch={onSearch}
        onChange={handleChange}
        style={{ width: "260px" }}
      />
    </>
  );
};

export default ListSearch;
