import { useEffect, useState } from 'react';

/*** helpers ***/
import { nknownNormalizers } from '@network';

export const useAsyncAction = (hideError?: boolean) => {
  const [loading, setLoading] = useState<boolean | string>();
  const [responseError, setResponseError] = useState<Error | false>();
  const asyncAction = async (action: any, data?: any, method?: string) => {
    try {
      setLoading(action?.name);
      const normalized =
        action?.name in nknownNormalizers
          ? nknownNormalizers[action?.name as keyof typeof nknownNormalizers](
              data,
            )
          : data;
      return await action(normalized, data, method);
    } catch (e) {
      const error = e as Error;
      setResponseError(error);
      throw new Error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (responseError && !hideError) {
      // TODO if it's ok to handle all of the errors in one place - you can add some toast here
      /*** here ***/
      setTimeout(setResponseError, 500, false);
    }
  }, [responseError, hideError]);
  return {
    asyncAction,
    loading,
    responseError,
  };
};
