import axios, { AxiosResponse, AxiosError } from "axios";

const host = process.env.BASE_URL

export const NoteCreate = async (
  account: string,
  id: string,
  title?: string,
  name?: string,
  image?: string,
): Promise<void> => {
  const url = `${host}/folders/${id}/notes`;
  try {
    const response: AxiosResponse = await axios.post(url, {
      name: name,
      title: title,
      account: account,
      image: image,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from NoteCreate`);
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};

export const NoteDelete = async (
  NoteId: string,
  FolderId: string
): Promise<void> => {
  const url = `${host}/folders/${FolderId}/notes/${NoteId}`;
  try {
    const response: AxiosResponse = await axios.delete(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from NoteCreate`);
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};

export const NotePatch = async (
  account: string,
  FolderId: string,
  NoteId: string,
  title?: string,
  name?: string,
  image?: string,
): Promise<void> => {
  const url = `${host}/folders/${FolderId}/notes/${NoteId}`;
  try {
    const response: AxiosResponse = await axios.patch(url, {
      name: name,
      title: title,
      account: account,
      image: image,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from NoteCreate`);
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(`Error: ${e.response?.data?.error}`);
    }
    throw e;
  }
};