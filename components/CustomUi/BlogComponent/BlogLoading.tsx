import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="flex flex-row overflow-hidden gap-5">
    {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className='relative w-[300px]'>
          <Skeleton className='w-full h-[300px] relative'></Skeleton>
          <div className='flex flex-col gap-2'>
            <Skeleton className='font-Satoshi text-base mt-5 h-5'></Skeleton>
            <Skeleton className='text-[12px] uppercase text-gray h-5'></Skeleton>
          </div>
        </div>
      ))}
</div>
  ) 
  

}
