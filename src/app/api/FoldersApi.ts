import { api } from '@/interceptors/api';
import { FoldersStore } from '@/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
const host = process.env.NEXT_PUBLIC_BASE_URL;

export const createFolders: FoldersStore['createFolders'] = async (name) => {

  const url = `${host}/folders`;
  try {
    const response: AxiosResponse = await api.post(url, {
      name: name,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from createFolders`);
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

export const getFolders: FoldersStore['getFolders'] = async () => {
  const url = `${host}/folders`;
  try {
    const response: AxiosResponse = await api.get(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from getFolders`);
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

export const getByIdFolders: FoldersStore['getByIdFolders'] = async (id) => {
  const url = `${host}/folders/${id}`;
  try {
    const response: AxiosResponse = await api.get(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from getByIdFolders`);
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

export const deleteByIdFolders: FoldersStore['deleteByIdFolders'] = async (id) => {
  const url = `${host}/folders/${id}`;
  try {
    const response: AxiosResponse = await api.delete(url);
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from deleteByIdFolders`);
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

export const patchByIdFolders: FoldersStore['patchByIdFolders'] = async (name, id) => {
  const url = `${host}/folders/${id}`;
  try {
    const response: AxiosResponse = await api.patch(url, {
      name: name,
    });
    if (response.status !== 200) {
      throw new Error(`${response.data} : throw from patchByIdFolders`);
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
