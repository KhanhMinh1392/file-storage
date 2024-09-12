import Image from 'next/image';
import Thumbnail from '@/assets/images/thumbnail.webp';
import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <main className="px-6">
      <section className="mx-auto grid grid-cols-1 place-items-center py-20 md:max-w-7xl md:grid-cols-2">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-semibold">Easy and secure access to your content</h1>
          <h6 className="mt-6 text-xl text-gray-500">
            Store, share, and collaborate on files and folders from your mobile device, tablet, or computer
          </h6>
          <div className="mt-10 flex items-center gap-6">
            <Button color="primary" size="lg">
              Try drive for work
            </Button>
            <Button size="lg">Go to drive</Button>
          </div>
        </div>
        <Image src={Thumbnail} alt="thumbnail" className="h-full w-auto object-cover" priority />
      </section>
    </main>
  );
}
