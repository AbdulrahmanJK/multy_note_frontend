import { NoteStore } from '@/types';
import axios, { AxiosResponse, AxiosError } from 'axios';

const host = process.env.BASE_URL;

export const NoteCreate: NoteStore['NoteCreate'] = async (id, title?, name?, image?) => {
  const url = `${host}/folders/${id}/notes`;
  try {
    const response: AxiosResponse = await axios.post(url, {
      name: name,
      title: title,
      image: image,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from NoteCreate`);
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

export const NoteDelete: NoteStore['NoteDelete'] = async (NoteId, FolderId) => {
  const url = `${host}/folders/${FolderId}/notes/${NoteId}`;
  try {
    const response: AxiosResponse = await axios.delete(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from NoteDelete`);
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

export const NotePatch: NoteStore['NotePatch'] = async (account, FolderId, NoteId, title?, name?, image?) => {
  const url = `${host}/folders/${FolderId}/notes/${NoteId}`;
  try {
    const response: AxiosResponse = await axios.patch(url, {
      name: name,
      title: title,
      account: account,
      image: image,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from NotePatch`);
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
