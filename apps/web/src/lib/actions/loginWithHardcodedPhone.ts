// app/actions/loginWithHardcodedPhone.ts
'use server';

import { fetchUserByPhone } from '@/lib/actions/FetchUserByPhone';

export async function loginWithHardcodedPhone() {
  return await fetchUserByPhone('7728391');
}
