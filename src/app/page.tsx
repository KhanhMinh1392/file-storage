import Image from 'next/image';
import Thumbnail from '@/assets/images/thumbnail.webp';
import { Button } from '@nextui-org/button';

export default function Page() {
  return (
    <main className="px-6">
      <section className="mx-auto grid h-full grid-cols-1 place-items-center gap-3 max-sm:my-6 md:min-h-[720px] md:max-w-7xl md:grid-cols-2">
        <div className="max-w-xl">
          <h1 className="text-5xl font-semibold md:text-6xl">Easy and secure access to your content</h1>
          <h6 className="mt-6 text-lg text-gray-500 md:text-xl">
            Store, share, and collaborate on files and folders from your mobile device, tablet, or computer
          </h6>
          <div className="mt-6 flex items-center gap-6 max-sm:justify-center md:mt-10">
            <Button color="primary" size="lg">
              Try drive for work
            </Button>
            <Button size="lg">Go to drive</Button>
          </div>
        </div>
        <Image src={Thumbnail} alt="thumbnail" className="w-auto min-w-full object-cover" priority />
      </section>
    </main>
  );
}
