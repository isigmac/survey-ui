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
  page: number;
  pageSize: number;
};

export async function getQuestionListService(criteria: Partial<SearchCriteria>): Promise<ResponseDataType> {
  const url = `/api/questions`;
  const data = (await axios.get(url, { params: criteria })) as ResponseDataType;

  // {a:10, b:20} => api/questions?a=10&b=20

  return data;
}

export async function updateQuestionService(id: string, payload: { [key: string]: any }): Promise<ResponseDataType> {
  const url = `/api/questions/${id}`;
  const data = (await axios.patch(url, { data: payload })) as ResponseDataType;

  return data;
}

export async function copyQuestionService(id: string): Promise<ResponseDataType> {
  const url = `/api/questions/${id}/copy`;
  const data = (await axios.post(url)) as ResponseDataType;

  return data;
}

export async function deleteQuestionService(id: string): Promise<ResponseDataType> {
  const url = `/api/questions/${id}`;
  const data = (await axios.patch(url, { data: { isDeleted: true } })) as ResponseDataType;

  return data;
}

export async function purgeQuestionService(ids: string[]): Promise<boolean> {
  const url = `/api/questions`;
  (await axios.delete(url, { data: ids })) as ResponseDataType;

  return true;
}

export async function recoverQuestionService(ids: string[]): Promise<boolean> {
  for await (const id of ids) {
    const url = `/api/questions/${id}`;
    await axios.patch(url, { data: { isDeleted: false } });
  }

  return true;
}
