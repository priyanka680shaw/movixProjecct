import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
  return (
    <div className='w-[227px] h-[400px] m-2 cursor-pointer bg-gray-800 rounded-3xl shadow-md overflow-hidden'>
      <div className='imageContainer relative'>
        <Skeleton
          height={300}
          width={250}
          className="w-full h-[300px] rounded-t-3xl mb-2"
        />
      </div>

      <div className='flex flex-col px-2'>
        <p className='font-semibold text-lg text-gray-300 mb-1'>
          <Skeleton width={`80%`} />
        </p>
        <p className='font-semibold text-md text-gray-300 mb-1'>
          <Skeleton width={`60%`} />
        </p>
        <p className='font-semibold text-sm text-gray-300'>
          <Skeleton width={`40%`} />
        </p>
      </div>
    </div>
  );
}

export default SkeletonCard;
