import axios, { AxiosError, AxiosResponse } from "axios";

const host = process.env.NEXT_PUBLIC_BASE_URL;
export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const url = `${host}/login`;
  console.log(host);

  try {
    const response: AxiosResponse = await axios.post(url, {
      email: email,
      password: password,
    });

    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from login`);
    }

    const json = await response.data;
    console.log(json);
    return json;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};
export const register = async (
  email: string,
  password: string,
  username: string
): Promise<undefined> => {
  const url = `${host}/auth`;
  try {
    const response: AxiosResponse = await axios
      .post(url, {
        username: username,
        email: email,
        password: password,
      })
    console.log(response);

    if (response.status !== 200) {
      throw new Error(`${response.status} : throw from register`);
    }

    const json = await response.data;
    console.log(json);
    return json;
  } catch (e) {
    console.error((e as Error).message);
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
      throw (e.response?.data?.error);

    }
  }
};

export const getMe = async () => {
  const url = `${host}/getMe`;
  try {
    const response: AxiosResponse = await axios.get(url, {});

    if (response.status !== 200) {
      throw new Error(`${response.status} : throw from getMe`);
    }

    const json = await response.data;

    console.log(json);
    return json;
  } catch (e) {
    console.error((e as Error).message);
  }
};
