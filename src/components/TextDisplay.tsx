import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const TextDisplay = () => {
  return (
    <div className='min-h-[300px] bg-gray-900 grid grid-cols-1 rounded-3xl p-4'>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit quos quasi ducimus earum vel saepe, natus commodi eaque, eveniet assumenda explicabo? Dignissimos itaque nesciunt esse optio nostrum non sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est quisquam eius nisi illo accusamus, soluta aliquam neque quae velit unde natus maxime, incidunt, vel delectus eos quo cupiditate doloremque.</p>
      <div className='flex items-center gap-4 self-end justify-self-end'>
        <Button className='btn-full p-0'>
          <ChevronLeft size={25} />
        </Button>
        <Button className='btn-full p-0'>
          <ChevronRight size={25} />
        </Button>
      </div>
    </div>
  );
};
