import { Input } from './ui/input';
import { Button } from './ui/button';

import { Plus, Save, Trash2 } from 'lucide-react';
export const InputActions = () => {
  return (
    <div className='grid grid-cols-[1fr_45px_45px_90px] md:gap-3 gap-1 '>
      <Input className=' ' placeholder='input a character' />
      <Button className='btn bg-green-600 hover:bg-green-800 p-0'>
        <Plus size={18} />
      </Button>
      <Button className='btn bg-red-600 hover:bg-red-800 p-0'>
        <Trash2 size={18} />
      </Button>
      <Button className='btn p-0 bg-purple-700 hover:bg-purple-800 !w-[90px]'>
        <Save size={18} /> Save
      </Button>
    </div>
  );
};
