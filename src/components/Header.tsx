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
            className='h-[40px] w-[40px]  md:h-[50px] md:w-[50px] object-contain'
          />
        </a>
        <Dialog>
          <DialogTrigger className='border border-gray-400 btn-full text-gray-400 grid place-content-center'>
            <Info size={17} />
          </DialogTrigger>
          <DialogContent >
            <DialogHeader>
              <DialogTitle>
                Keyboard Shortcuts
              </DialogTitle>
              <DialogDescription className='text-gray-400 '>
                These keyboard shortcuts can enhance your text editing
                experience and improve productivity.
              </DialogDescription>
              <div>
                <h4 className='my-2'></h4>
                <ul className='list-disc flex flex-col gap-3'>
                  <li>
                    <strong className='whitespace-nowrap text-gray-200 flex'>
                      <img
                        className='w-6 h-6'
                        src={
                          'https://img.icons8.com/?size=100&id=52959&format=png&color=000000'
                        }
                      />
                      Arrow Left
                    </strong>
                    Press the Left Arrow Key to move the cursor backward in the
                    text.
                  </li>
                  <li>
                    <strong className='whitespace-nowrap text-gray-200 flex items-center'>
                      <img
                        className='w-6 h-6'
                        src={
                          'https://img.icons8.com/?size=100&id=53000&format=png&color=000000'
                        }
                      />
                      Arrow Right
                    </strong>
                    Press the Right Arrow Key to move the cursor forward in the
                    text.
                  </li>
                  <li>
                    <strong className='whitespace-nowrap text-gray-200 flex items-center'>
                      <img
                        className='w-6 h-6'
                        src={
                          'https://img.icons8.com/?size=100&id=48303&format=png&color=000000'
                        }
                      />
                      Enter
                    </strong>
                    Press the Enter Key to add a new text.
                  </li>
                  <li>
                    <strong className='whitespace-nowrap text-gray-200 flex items-center'>
                      <img
                        className='w-6 h-6'
                        src={
                          'https://img.icons8.com/?size=100&id=2QNRrIsXL2Si&format=png&color=000000'
                        }
                      />
                      Backspace/Delete
                    </strong>
                    Press the Backspace Key to delete text.
                  </li>
                </ul>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </main>
    </header>
  );
};
