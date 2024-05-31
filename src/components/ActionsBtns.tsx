import { Button } from './ui/button';
import { Undo2, Redo2, RefreshCcw } from 'lucide-react';

export const ActionsBtns = () => {
  return (
    <div className='flex items-center md:gap-4 gap-2'>
      <Button className='btn-full p-0'>
        <Undo2 size={18} />
      </Button>
      <Button className='btn-full p-0'>
        <Redo2 size={18} />
      </Button>
      <Button className='btn-full p-0'>
        <RefreshCcw size={18} />
      </Button>
    </div>
  );
};
