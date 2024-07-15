import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {
  
    return (
        <section className="sectionContainer flex flex-col space-y-3">
      <Skeleton className="h-full w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </section>
    )
  }