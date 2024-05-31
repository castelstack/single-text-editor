import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

export const SaveHistory = ({ history }: { history: string[] }) => {
  return (
    <div className='min-h-[300px] rounded-3xl p-4 flex flex-col gap-4 bg-gray-950 my-8'>
      <h4>Save History</h4>
      <div className='max-h-[270px] divide-y flex flex-col divide-gray-900  overflow-y-auto '>
        {history.length <= 0 ? (
          <p className='text-center w-[80%] self-center '>Nothing is saved yet!</p>
        ) : (
          <>
            {history.map((text, index) => (
              <div
                key={index}
                className='py-2 flex max-md:flex-col md:items-center justify-between gap-3'
              >
                <p>{text}</p>{' '}
                <Button className='btn max-md:ml-auto max-h-[30px] max-w-[30px] bg-red-600/25 hover:bg-red-800 p-0'>
                  <Trash2 size={13} />
                </Button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
