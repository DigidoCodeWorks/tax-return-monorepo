'use client';
import { ArrowRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const FormFooter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const split = pathname.split('/');
  const step = split[split.length - 1];
  return (
    <div className="border-t border-primary-dark-100 w-full px-12 md:px-[114px] py-10 flex justify-end bg-white">
      <button
        onClick={() => console.log('click ')}
        className="flex bg-primary-blue-400 hover:bg-[#0052d6] py-[18px] text-white items-center gap-x-2 px-6 rounded-lg hover:cursor-pointer"
      >
        Halda áfram <ArrowRight color="white" size={18} />
      </button>
    </div>
  );
};

export default FormFooter;
