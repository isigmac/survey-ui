import axios, { ResponseDataType } from "./ajax";

export async function getUserInfoService(): Promise<ResponseDataType> {
  const url = `/api/user/info`;
  const data = (await axios.get(url)) as ResponseDataType;

  return data;
}

export async function createUserService(
  username: string,
  password: string,
  nickname?: string
): Promise<ResponseDataType> {
  const url = `/api/user/register`;
  const body = {
    username,
    password,
    nickname: nickname || username,
  };

  const data = (await axios.post(url, body)) as ResponseDataType;

  return data;
}

export async function loginService(username: string, password: string): Promise<ResponseDataType> {
  const url = `/api/user/login`;
  const body = {
    username,
    password,
  };

  const data = (await axios.post(url, body)) as ResponseDataType;

  return data;
}
