import API from "../../lib/API";
import signUp from "./signUp";

describe('signUp', () => {
  it('should post /auth/sign-up through API', async () => {
    const response = { data: {} };
    jest.spyOn(API, 'post').mockResolvedValue(response);

    const email = 'zlong@outlook.com';
    const password = 'password';

    const data = await signUp(email, password);

    expect(API.post).toHaveBeenCalledWith('/auth/sign-up', { email, password });
    expect(data).toEqual(response.data);
  });
});
