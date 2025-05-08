import { fetchTaxReturnDebt } from '@/lib/actions/fetchTaxReturnDebt';
import { graphqlClient } from '@/lib/graphql/client';

jest.mock('@/lib/graphql/client', () => ({
  graphqlClient: {
    request: jest.fn(),
  },
}));

describe('fetchTaxReturnDebt', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns debtAndExpenses when GraphQL request succeeds', async () => {
    const mockDebt = [{ type: 'loan' }];
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: { debtAndExpenses: mockDebt },
    });

    const result = await fetchTaxReturnDebt('id123');

    expect(graphqlClient.request).toHaveBeenCalledWith(expect.anything(), {
      id: 'id123',
    });
    expect(result).toEqual(mockDebt);
  });

  it('returns null if ID is undefined', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = await fetchTaxReturnDebt(undefined);

    expect(warnSpy).toHaveBeenCalledWith('ID is undefined. Returning null.');
    expect(result).toBeNull();

    warnSpy.mockRestore();
  });

  it('returns null if getTaxReturn is null', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: null,
    });

    const result = await fetchTaxReturnDebt('missingId');
    expect(result).toBeNull();
  });

  it('returns null if getTaxReturn.debtAndExpenses is undefined', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: {},
    });

    const result = await fetchTaxReturnDebt('noDebt');
    expect(result).toBeNull();
  });

  it('returns null and logs error if request fails', async () => {
    const error = new Error('GraphQL error');
    (graphqlClient.request as jest.Mock).mockRejectedValueOnce(error);
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await fetchTaxReturnDebt('fail');

    expect(errorSpy).toHaveBeenCalledWith(
      'Error fetching tax return debt/expenses:',
      error,
    );
    expect(result).toBeNull();

    errorSpy.mockRestore();
  });
});
