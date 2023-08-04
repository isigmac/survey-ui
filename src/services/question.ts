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
export async function getQuestionListService(): Promise<ResponseDataType> {
  const url = `/api/questions`;
  const data = (await axios.get(url)) as ResponseDataType;

  return data;
}
