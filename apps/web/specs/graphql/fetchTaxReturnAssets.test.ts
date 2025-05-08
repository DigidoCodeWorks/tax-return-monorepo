import { fetchTaxReturnAssets } from '@/lib/actions/fetchTaxReturnAssets';
import { graphqlClient } from '@/lib/graphql/client';

jest.mock('@/lib/graphql/client', () => ({
  graphqlClient: {
    request: jest.fn(),
  },
}));

describe('fetchTaxReturnAssets', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns assets when GraphQL request succeeds', async () => {
    const mockAssets = [{ type: 'car' }, { type: 'apartment' }];
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: { assets: mockAssets },
    });

    const result = await fetchTaxReturnAssets('returnId123');

    expect(graphqlClient.request).toHaveBeenCalledWith(expect.anything(), {
      id: 'returnId123',
    });
    expect(result).toEqual(mockAssets);
  });

  it('returns null if ID is undefined', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = await fetchTaxReturnAssets(undefined);

    expect(warnSpy).toHaveBeenCalledWith('ID is undefined. Returning null.');
    expect(result).toBeNull();

    warnSpy.mockRestore();
  });

  it('returns null if getTaxReturn is null', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: null,
    });

    const result = await fetchTaxReturnAssets('missingId');
    expect(result).toBeNull();
  });

  it('returns null if getTaxReturn.assets is undefined', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: {},
    });

    const result = await fetchTaxReturnAssets('noAssetsId');
    expect(result).toBeNull();
  });

  it('returns null and logs error if request fails', async () => {
    const error = new Error('Something went wrong');
    (graphqlClient.request as jest.Mock).mockRejectedValueOnce(error);
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await fetchTaxReturnAssets('failId');

    expect(errorSpy).toHaveBeenCalledWith(
      'Error fetching tax return assets:',
      error,
    );
    expect(result).toBeNull();

    errorSpy.mockRestore();
  });
});
