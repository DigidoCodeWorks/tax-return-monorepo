import { ArrowRight, Check } from 'lucide-react';
import React from 'react';
import BackButton from './BackButton';
type Props = {
  currentStep: number;
};
const FormFooter = ({ currentStep }: Props) => {
  return (
    <div
      className={`border-t border-primary-dark-100 w-full  py-10 flex ${currentStep === 1 || currentStep === 6 ? 'px-12 md:px-[114px]' : 'px-[0px]'} ${currentStep === 1 ? 'justify-end' : 'justify-between'} bg-white`}
    >
      <BackButton currentStep={currentStep} />

      <button
        type="submit"
        className="flex bg-primary-blue-400 hover:bg-[#0052d6] py-[18px] text-white items-center gap-x-2 px-6 rounded-lg hover:cursor-pointer"
      >
        {currentStep === 1 && 'Halda áfram'}{' '}
        {currentStep > 1 && currentStep < 4 && 'Vista og halda áfram'}{' '}
        {currentStep === 4 && 'Vista og halda áfram'}
        {currentStep === 5 && 'Skila framtali'}
        {currentStep === 6 && 'Opna mínar síður'}
        {currentStep === 5 ? (
          <Check color="white" size={18} />
        ) : (
          <ArrowRight color="white" size={18} />
        )}
      </button>
    </div>
  );
};

export default FormFooter;
