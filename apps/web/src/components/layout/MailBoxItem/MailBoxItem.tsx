import { Typography } from '@/components/ui/typography';
import { MailBoxItem } from '@/lib/data/mailBox';
import React from 'react';

type Props = {
  mailBoxItem: MailBoxItem;
};
const MailBoxItemComp = ({ mailBoxItem }: Props) => {
  return (
    <div className="bg-white border-b border-primary-blue-200  px-4 py-3 flex justify-between items-start hover:bg-blue-100 hover:cursor-pointer transition">
      <div className="flex items-center w-full gap-x-4">
        <div className="rounded-full bg-inherit md:bg-primary-blue-200 w-10 h-10 flex justify-center items-center">
          <mailBoxItem.icon className="w-6 h-6 text-primary-blue-400 p-2.5" />
        </div>
        <div>
          <Typography variant="body" className="text-primary-dark-400 ">
            {mailBoxItem.title}
          </Typography>
          <Typography
            variant="body"
            className="text-primary-blue-400 line-clamp-1 max-w-[290px]"
          >
            {mailBoxItem.subject}
          </Typography>
        </div>
      </div>
      <Typography
        variant="body"
        className="text-primary-dark-400  whitespace-nowrap "
      >
        {mailBoxItem.date}
      </Typography>
    </div>
  );
};

export default MailBoxItemComp;
