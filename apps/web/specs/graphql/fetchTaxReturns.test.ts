import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
import { graphqlClient } from '@/lib/graphql/client';

jest.mock('@/lib/graphql/client', () => ({
  graphqlClient: {
    request: jest.fn(),
  },
}));

describe('fetchTaxReturnsByUserId', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns tax returns when GraphQL request succeeds', async () => {
    const mockReturns = [{ id: 't1' }, { id: 't2' }];
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturns: mockReturns,
    });

    const result = await fetchTaxReturnsByUserId('user123');

    expect(graphqlClient.request).toHaveBeenCalledWith(expect.anything(), {
      userId: 'user123',
    });
    expect(result).toEqual(mockReturns);
  });

  it('returns null and logs warning if userId is undefined', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = await fetchTaxReturnsByUserId(undefined);

    expect(warnSpy).toHaveBeenCalledWith(
      'userId is undefined. Returning null.',
    );
    expect(result).toBeNull();
    warnSpy.mockRestore();
  });

  it('returns null and logs error when GraphQL request fails', async () => {
    const error = new Error('Request failed');
    (graphqlClient.request as jest.Mock).mockRejectedValueOnce(error);
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await fetchTaxReturnsByUserId('brokenUser');

    expect(errorSpy).toHaveBeenCalledWith('Error fetching tax returns:', error);
    expect(result).toBeNull();
    errorSpy.mockRestore();
  });

  it('returns null when getTaxReturns is null', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturns: null,
    });

    const result = await fetchTaxReturnsByUserId('user456');
    expect(result).toBeNull();
  });
});
