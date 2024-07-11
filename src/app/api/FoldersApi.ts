import axios, { AxiosError, AxiosResponse } from "axios";

const host = process.env.BASE_URL;

export const FoldersCreate = async (name: string): Promise<void> => {
  const url = `${host}/folders`;
  try {
    const response: AxiosResponse = await axios.post(url, {
      name: name,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from FoldersCreate`);
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};

export const FoldersGet = async (): Promise<[]> => {
  const url = `${host}/folders`;
  try {
    const response: AxiosResponse = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from FoldersGet`);
    }
    const json = await response.data;
    return json;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};

export const FoldersGetById = async (id: string): Promise<{}> => {
  const url = `${host}/folders/${id}`;
  try {
    const response: AxiosResponse = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from FoldersGetById`);
    }
    const json = await response.data;
    return json;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};

export const FoldersDeleteById = async (id: string): Promise<void> => {
  const url = `${host}/folders/${id}`;
  try {
    const response: AxiosResponse = await axios.delete(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from FoldersDeleteById`);
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};

export const FoldersPatchById = async (
  name: string,
  id: string
): Promise<{}> => {
  const url = `${host}/folders/${id}`;
  try {
    const response: AxiosResponse = await axios.patch(url, {
      name: name,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from FoldersGetById`);
    }
    const json = await response.data;
    return json;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};
