import axios, { ResponseDataType } from "./ajax";

// import type { ResponseDataType } from "./ajax";

export async function getQuestionService(id: string): Promise<ResponseDataType> {
  const url = `/api/questions/${id}`;
  const data = (await axios.get(url)) as ResponseDataType;

  return data;
}

// create survey
export async function postQuestionService(): Promise<ResponseDataType> {
  const url = `/api/questions`;
  const data = (await axios.post(url)) as ResponseDataType;

  return data;
}
