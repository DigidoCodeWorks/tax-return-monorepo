import { loginWithHardcodedPhone } from '@/lib/actions/loginWithHardcodedPhone';
import { fetchUserByPhone } from '@/lib/actions/FetchUserByPhone';
import { cookies } from 'next/headers';

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

jest.mock('@/lib/actions/FetchUserByPhone');

describe('loginWithHardcodedPhone', () => {
  const mockSet = jest.fn();

  beforeEach(() => {
    (cookies as jest.Mock).mockReturnValue({ set: mockSet });
    mockSet.mockClear();
  });

  it('sets cookie and returns user when fetch succeeds', async () => {
    const mockUser = { id: '123' };
    (fetchUserByPhone as jest.Mock).mockResolvedValue(mockUser);

    const result = await loginWithHardcodedPhone();

    expect(fetchUserByPhone).toHaveBeenCalledWith('7728391');
    expect(mockSet).toHaveBeenCalledWith(
      'userId',
      '123',
      expect.objectContaining({
        httpOnly: true,
        path: '/',
        secure: expect.any(Boolean),
        maxAge: 60 * 60 * 24 * 7,
      }),
    );
    expect(result).toEqual(mockUser);
  });

  it('returns undefined and does not set cookie when fetch fails', async () => {
    (fetchUserByPhone as jest.Mock).mockResolvedValue(undefined);

    const result = await loginWithHardcodedPhone();

    expect(mockSet).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});
