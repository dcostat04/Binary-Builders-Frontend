import axios from 'axios';

export const subSignUp = async () => {
  const response = await axios.get(
    'http://127.0.0.1:8000/api/login/',

    {
      email: 'random@gmail.com',
      password: '234332423',
    }
  );
  return response;
};
