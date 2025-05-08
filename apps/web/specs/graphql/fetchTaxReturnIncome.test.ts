import { fetchTaxReturnIncome } from '@/lib/actions/fetchTaxReturnIncome';
import { graphqlClient } from '@/lib/graphql/client';

jest.mock('@/lib/graphql/client', () => ({
  graphqlClient: {
    request: jest.fn(),
  },
}));

describe('fetchTaxReturnIncome', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns revenue when GraphQL request succeeds', async () => {
    const mockRevenue = [{ type: 'salary', amount: 2000000 }];
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: { revenue: mockRevenue },
    });

    const result = await fetchTaxReturnIncome('incomeId123');

    expect(graphqlClient.request).toHaveBeenCalledWith(expect.anything(), {
      id: 'incomeId123',
    });
    expect(result).toEqual(mockRevenue);
  });

  it('returns null if ID is undefined', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = await fetchTaxReturnIncome(undefined);

    expect(warnSpy).toHaveBeenCalledWith('ID is undefined. Returning null.');
    expect(result).toBeNull();

    warnSpy.mockRestore();
  });

  it('returns null if getTaxReturn is null', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: null,
    });

    const result = await fetchTaxReturnIncome('nonexistentId');
    expect(result).toBeNull();
  });

  it('returns null if getTaxReturn.revenue is undefined', async () => {
    (graphqlClient.request as jest.Mock).mockResolvedValueOnce({
      getTaxReturn: {},
    });

    const result = await fetchTaxReturnIncome('noIncomeId');
    expect(result).toBeNull();
  });

  it('returns null and logs error if request fails', async () => {
    const error = new Error('Query failed');
    (graphqlClient.request as jest.Mock).mockRejectedValueOnce(error);
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await fetchTaxReturnIncome('failIncome');

    expect(errorSpy).toHaveBeenCalledWith(
      'Error fetching tax return income:',
      error,
    );
    expect(result).toBeNull();

    errorSpy.mockRestore();
  });
});
