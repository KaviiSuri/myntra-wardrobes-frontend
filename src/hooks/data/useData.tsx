import { useEffect, useState } from "react";

interface UseDataReturns<T> {
  data: T;
  error: any;
  statusCode: number | undefined;
  isLoading: boolean;
}

const useData = <T extends unknown>(
  initialData: T | undefined,
  caller: () => Promise<T>,
  refreshOnLoad: boolean = true
): UseDataReturns<T | undefined> => {
  const [data, setData] = useState<T | undefined>(initialData);
  const [error, setError] = useState<any>();
  const [statusCode, setStatusCode] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function executeEffect() {
      try {
        setIsLoading(true);
        const res = await caller();
        setData(res);
        setStatusCode(200);
      } catch (error) {
        console.log(error);
        if (error.isAxiosError) {
          if (error.response) {
            setError(error.response);
            setStatusCode(error.response.status || 500);
          } else if (error.request) {
            setError(error.request.data);
            setStatusCode(error.request.status || 500);
          }
        } else {
          setError("An error occured");
          setStatusCode(500);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (refreshOnLoad || !initialData) {
      executeEffect();
    }
  }, [caller]);

  return { data, error, statusCode, isLoading };
};

export default useData;
