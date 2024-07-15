"use client"

import * as React from "react"
import { Check, ChevronsUpDown , ArrowDownIcon } from "lucide-react"
import { ArrowRight } from "@/components/CustomIcons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import he from 'he'

type BlogCategorySelectProps = {
    category: Record<string, any>
    value: string
    setValue: (value: string) => void
    
}

export function BlogCategorySelect({category , value , setValue} : BlogCategorySelectProps) {
  const [open, setOpen] = React.useState(false)
  const [SelectedCategory, setSelectedCategory] = React.useState<string | undefined>();
 const frameworks = category
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between p-3 px-5 rounded-full bg-transparent"
        >
         {SelectedCategory ? SelectedCategory : "Select Category"}
          <ArrowRight className={cn("blackArrow rotate-90 h-4 w-4 shrink-0 opacity-50 transition-all ease-out duration-300", [
            open ? "rotate-[-90deg]" : "",
          ])} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 rounded-[20px]">
        <Command className="bg-white rounded-[20px] py-3 px-2">
         
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
            <CommandItem
                    
                    value={"all"}
                    onSelect={(currentValue) => {
                        setValue("")
                        setOpen(false)
                        setSelectedCategory("All")
                    }}
                    className={cn("border-b-2 py-3 last:border-b-0 last:pb-1 hover:font-bold",[
                      
                    ])}
                >
                    All
                </CommandItem>
            {category?.map((framework:any) => (
                <CommandItem
                    key={framework.id}
                    value={framework.id}
                    onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : framework.id)
                        setOpen(false)
                        setSelectedCategory(he.decode(framework.name))
                    }}
                    className={cn("border-b-2 py-3 last:border-b-0 last:pb-1 hover:font-bold",[
                      framework.count == 0 ? "hidden" : ""
                    ])}
                >
                    {he.decode(framework.name)}
                </CommandItem>
            ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
