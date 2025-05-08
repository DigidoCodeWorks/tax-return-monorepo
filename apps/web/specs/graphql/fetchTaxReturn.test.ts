import { fetchTaxReturnById } from '@/lib/actions/fetchTaxReturn';
import { graphqlClient } from '@/lib/graphql/client';

jest.mock('@/lib/graphql/client', () => ({
  graphqlClient: {
    request: jest.fn(),
  },
}));

describe('fetchTaxReturnById', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns tax return when GraphQL request succeeds', async () => {
    const mockTaxReturn = { id: 'tr1', year: 2024 };
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: mockTaxReturn,
    });

    const result = await fetchTaxReturnById('tr1');

    expect(graphqlClient.request).toHaveBeenCalledWith(expect.anything(), {
      id: 'tr1',
    });
    expect(result).toEqual(mockTaxReturn);
  });

  it('returns null when id is undefined', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = await fetchTaxReturnById(undefined);

    expect(consoleSpy).toHaveBeenCalledWith('ID is undefined. Returning null.');
    expect(result).toBeNull();

    consoleSpy.mockRestore();
  });

  it('returns null when getTaxReturn is null', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: null,
    });

    const result = await fetchTaxReturnById('notfound');

    expect(result).toBeNull();
  });

  it('returns null and logs error when request fails', async () => {
    const error = new Error('Request failed');
    (graphqlClient.request as jest.Mock).mockRejectedValueOnce(error);
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await fetchTaxReturnById('fail');

    expect(errorSpy).toHaveBeenCalledWith('Error fetching tax return:', error);
    expect(result).toBeNull();

    errorSpy.mockRestore();
  });
});
