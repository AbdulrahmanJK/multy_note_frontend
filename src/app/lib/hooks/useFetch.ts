import { useEffect, useState } from "react";

export default function useFetch<T extends (...args: any) => Promise<unknown>>(
  callback: (...args: Parameters<T>) => ReturnType<T>,
  onSuccess?: (data: Awaited<ReturnType<T>>) => void
) {
  const [data, setData] = useState<ReturnType<T>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const mutate = async (...args: Parameters<T>) => {
    setIsLoading(true);
    try {
      const _data = await callback(...args);
      setData(_data);
      onSuccess && onSuccess(_data);
    } catch (e) {
      setError(e as string);
    } finally {
      setIsLoading(false);
    }
  };
  return { mutate, data, isLoading, error };
}
