'use server';

import { fetchUserByPhone } from '@/lib/actions/FetchUserByPhone';
import { cookies } from 'next/headers';

export async function loginWithHardcodedPhone() {
  const user = await fetchUserByPhone('7728391');
  const cookieStore = await cookies();
  if (user?.id) {
    cookieStore.set('userId', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  return user;
}
