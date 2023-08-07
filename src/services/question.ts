import axios, { ResponseDataType } from "./ajax";

// import type { ResponseDataType } from "./ajax";

export async function getQuestionService(id: string): Promise<ResponseDataType> {
  const url = `/api/questions/${id}`;
  const data = (await axios.get(url)) as ResponseDataType;

  return data;
}

// create survey
export async function createQuestionService(): Promise<ResponseDataType> {
  const url = `/api/questions`;
  const data = (await axios.post(url)) as ResponseDataType;

  return data;
}

//get question list
type SearchCriteria = {
  keyword: string;
  isStar: boolean;
  isDeleted: boolean;
};

export async function getQuestionListService(criteria: Partial<SearchCriteria>): Promise<ResponseDataType> {
  const url = `/api/questions`;
  const data = (await axios.get(url, { params: criteria })) as ResponseDataType;

  // {a:10, b:20} => api/questions?a=10&b=20

  return data;
}
