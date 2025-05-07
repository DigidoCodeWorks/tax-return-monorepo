import { fetchTaxReturnById } from '@/lib/actions/fetchTaxReturn';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
import { fetchUserByPhone } from '@/lib/actions/FetchUserByPhone';

export default async function Index() {
  // const taxReturns = await fetchTaxReturnsByUserId('7728391');
  const user = await fetchUserByPhone('7728391');
  const taxReturns = await fetchTaxReturnsByUserId(user?.id);
  const taxReturn = await fetchTaxReturnById(
    taxReturns?.[taxReturns?.length - 1]?.id,
  );
  console.log(taxReturns, 'taxreturnssssss'); // 👈 server-side log
  console.log(taxReturn, 'taxreturn'); // 👈 server-side log
  console.log(user, 'userr'); // 👈 server-side log

  return (
    <main>
      <div>Hi</div>
    </main>
  );
}
