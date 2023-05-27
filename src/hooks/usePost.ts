import { useState, useEffect } from 'react';

interface PostDataResponse {
  success: boolean;
  message: string;
}

const usePostData = (url: string, data: object): PostDataResponse => {
  const [response, setResponse] = useState<PostDataResponse>({
    success: false,
    message: '',
  });

  useEffect(() => {
    const postData = async () => {
      try {
        const requestOptions: RequestInit = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        };

        const res = await fetch(url, requestOptions);
        const result: PostDataResponse = await res.json();
        setResponse(result);
      } catch (error) {
        console.error('Error:', error);
        setResponse({ success: false, message: 'An error occurred' });
      }
    };

    postData();
  }, [url, data]);

  return response;
};

export default usePostData;
