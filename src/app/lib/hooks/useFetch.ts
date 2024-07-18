import { AxiosError } from "axios";
import { useEffect, useState } from "react";
interface CustomError<T extends Record<string, unknown>> extends Error {
  response?: {
    data: T;
  };
}
export default function useFetch<T extends (...args: any) => Promise<unknown>>(
  callback: (...args: Parameters<T>) => ReturnType<T>,
  onSuccess?: (data: Awaited<ReturnType<T>>) => void
) {
  const [data, setData] = useState<ReturnType<T>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<CustomError<{ error: string }> | null>(null);
  const mutate = async (...args: Parameters<T>) => {
    setIsLoading(true);
    try {
      const _data = await callback(...args);
      setData(_data);
      onSuccess && onSuccess(_data);
    } catch (e) {
      setError(e as CustomError<{ error: string }>);
    } finally {
      setIsLoading(false);
    }
  };
  return { mutate, data, isLoading, error };
}
