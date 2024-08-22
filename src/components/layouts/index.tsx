import React, { PropsWithChildren } from 'react';
import Header from '../header';
import Icon from '../icon';
import { Progress } from '@nextui-org/react';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen gap-2.5 overflow-hidden">
      <aside className="min-w-[17rem] text-white">
        <h1 className="bg-[#2A8FD7] px-6 py-4 text-xl font-bold text-inherit">STORAGE BOX</h1>
        <div className="flex h-[calc(100%-60px)] flex-col justify-between bg-[#37A0EA] p-5">
          <ul className="text-lg">
            <li className="flex items-center gap-2.5 rounded-md bg-[#60BBFB] px-2 py-2 font-medium">
              <Icon name="house" />
              Home
            </li>
            <li className="flex items-center gap-2.5 rounded-md px-2 py-2 font-medium">
              <Icon name="folder" />
              My drive
            </li>
            <li className="flex items-center gap-2.5 rounded-md px-2 py-2 font-medium">
              <Icon name="history" />
              Recent
            </li>
          </ul>
          <div className="mx-auto w-52">
            <div className="flex items-center gap-1.5">
              <Icon name="cloud" width={36} height={36} />
              <p className="text-lg">My Storage</p>
            </div>
            <Progress
              aria-label="Loading..."
              value={40}
              className="my-2 max-w-md"
              classNames={{
                indicator: 'bg-[#99D4FF]',
                track: 'bg-white h-2',
              }}
            />
            <p className="text-[13px]">You have used 5 GB out of 15 GB.</p>
          </div>
        </div>
      </aside>
      <div className="mt-1 flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}
