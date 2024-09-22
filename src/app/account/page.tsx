import Icon from '@/components/icon';
import { Input } from '@nextui-org/input';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Account information',
};

const getUserInfo = async () => {
  const token = cookies().get('accessToken')?.value;
  const response = await fetch('https://file-storage-lake.vercel.app/api/v1/auth/info', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const users = await response.json();
  return users;
};

export default async function Account() {
  const users = await getUserInfo();
  console.log('>> user information', users);
  return (
    <>
      <h1 className="text-2xl font-semibold">Account</h1>
      <div className="mt-8">
        <h3 className="font-semibold">PROFILE DETAILS</h3>
        <form action="" className="w-1/2 space-y-14 pt-8">
          <Input
            isReadOnly
            type="text"
            label={<p className="font-semibold">Full name</p>}
            value={users.fullName}
            placeholder="Full name"
            labelPlacement="outside"
            className="block"
            startContent={<Icon name="user" className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
          />
          <Input
            isReadOnly
            type="email"
            label={<p className="font-semibold">Email address</p>}
            value={users.email}
            placeholder="you@example.com"
            labelPlacement="outside"
            className="block"
            startContent={<Icon name="mail" className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
          />
        </form>
      </div>
    </>
  );
}
