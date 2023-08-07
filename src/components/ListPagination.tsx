import { FC, useState, useEffect } from "react";
import { LIST_PAGE_SIZE, LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE_PARAM_KEY } from "../constant";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

// ui
import { Pagination } from "antd";

type PropsType = {
  total: number;
};

const ListPagination: FC<PropsType> = (props: PropsType) => {
  const { total } = props;

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE);

  const [searchParams] = useSearchParams();

  const nav = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || "1");
    setCurrent(page);
    const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || `${LIST_PAGE_SIZE}`);
    setPageSize(pageSize);

    console.log("page:", page);
    console.log("page size:", pageSize);
  }, [searchParams]);

  function handlePaginationChange(page: number, pageSize: number) {
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString());
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString());

    nav({
      pathname: pathname,
      search: searchParams.toString(),
    });
  }

  return (
    <>
      <Pagination current={current} total={total} pageSize={pageSize} onChange={handlePaginationChange}></Pagination>
    </>
  );
};

export default ListPagination;
