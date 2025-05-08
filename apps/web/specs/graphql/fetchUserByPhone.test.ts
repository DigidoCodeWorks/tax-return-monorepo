import { fetchUserByPhone } from '@/lib/actions/FetchUserByPhone';
import { graphqlClient } from '@/lib/graphql/client';

jest.mock('@/lib/graphql/client', () => ({
  graphqlClient: {
    request: jest.fn(),
  },
}));

describe('fetchUserByPhone', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns user when GraphQL request succeeds', async () => {
    const mockUser = { id: 'u1', name: 'Giorgi' };
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getUserByPhone: mockUser,
    });

    const result = await fetchUserByPhone('7728391');

    expect(graphqlClient.request).toHaveBeenCalledWith(expect.anything(), {
      phone: '7728391',
    });
    expect(result).toEqual(mockUser);
  });

  it('returns null when request fails', async () => {
    (graphqlClient.request as jest.Mock).mockRejectedValueOnce(
      new Error('Something went wrong'),
    );

    const result = await fetchUserByPhone('0000000');

    expect(result).toBeNull();
  });

  it('returns null when getUserByPhone is null', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getUserByPhone: null,
    });

    const result = await fetchUserByPhone('9999999');

    expect(result).toBeNull();
  });
});
