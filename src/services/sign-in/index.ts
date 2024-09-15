import axiosInstance from '@/lib/axiosIntance';

interface IBodyReqSignIn {
  email: string;
  password: string;
}

export const postSignIn = async (bodyReq: IBodyReqSignIn): Promise<{ access_token: string }> => {
  const url = '/auth/login';
  return await axiosInstance.post(url, bodyReq);
};
