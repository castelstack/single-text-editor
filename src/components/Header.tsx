import { Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export const Header = () => {
  return (
    <header className='px-2'>
      <main className='shadow-sm bg-gray-900 rounded-full mt-4 py-2 px-2 flex justify-between gap-6 wrapper'>
        <a href={'/'}>
          <img
            src={'/logo.svg'}
            alt='logo'
            className='h-[40px] w-[40px] md:h-[50px] md:w-[50px] object-contain'
          />
        </a>
        <Dialog>
          <DialogTrigger className='border border-gray-400 btn-full text-gray-400 grid place-content-center'>
            <Info size={17} />
          </DialogTrigger>
          <DialogContent className='bg-gray-900 border-gray-800 text-gray-200'>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
              <div></div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </main>
    </header>
  );
};
