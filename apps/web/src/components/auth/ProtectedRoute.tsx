'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn =
    typeof window !== 'undefined' &&
    localStorage.getItem('isLoggedIn') === 'true';
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push('/login');
  }, [isLoggedIn]);

  return isLoggedIn ? <>{children}</> : null;
};
