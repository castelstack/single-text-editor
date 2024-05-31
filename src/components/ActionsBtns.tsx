import { FuncType } from '../types';
import { Button } from './ui/button';
import { Undo2, Redo2, RefreshCcw } from 'lucide-react';

export const ActionsBtns = ({
  handleRedo,
  handleUndo,
  handleReset,
}: {
  handleRedo: FuncType;
  handleUndo: FuncType;
  handleReset: FuncType;
}) => {
  return (
    <div className='flex items-center md:gap-4 gap-2'>
      <Button className='btn-full p-0' type='button' onClick={handleUndo}>
        <Undo2 size={18} />
      </Button>
      <Button className='btn-full p-0' type='button' onClick={handleRedo}>
        <Redo2 size={18} />
      </Button>
      <Button className='btn-full p-0' type='button' onClick={handleReset}>
        <RefreshCcw size={18} />
      </Button>
    </div>
  );
};
