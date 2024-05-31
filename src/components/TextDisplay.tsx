import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { FuncType } from '../types';
import { useEffect } from 'react';

export const TextDisplay = ({
  text,
  handleCursorDirBack,
  handleCursorDirFrw,
  cursorCurrIndex,
}: {
  text: string;
  handleCursorDirFrw: FuncType;
  handleCursorDirBack: FuncType;
  cursorCurrIndex: number;
}) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleCursorDirBack();
      } else if (e.key === 'ArrowRight') {
        handleCursorDirFrw();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCursorDirBack, handleCursorDirFrw]);

  return (
    <div className='min-h-[300px] bg-gray-900 grid grid-cols-1 rounded-3xl p-4'>
      <p className='inline-flex text-xl'>
        {text.slice(0, cursorCurrIndex)}
        <p className='animate-pulse text-gray-200 inline-flex'>_</p>
        {text.slice(cursorCurrIndex)}
      </p>
      <div className='flex items-center gap-4 self-end justify-self-end'>
        <Button
          className='btn-full p-0'
          type='button'
          onClick={handleCursorDirBack}
        >
          <ChevronLeft size={25} />
        </Button>
        <Button
          className='btn-full p-0'
          type='button'
          onClick={handleCursorDirFrw}
        >
          <ChevronRight size={25} />
        </Button>
      </div>
    </div>
  );
};
