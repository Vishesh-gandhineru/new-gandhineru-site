"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

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
          className="w-[200px] justify-between p-3 px-5 rounded-full"
        >
         {SelectedCategory ? SelectedCategory : "Select Category"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
         
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
            {frameworks?.map((framework:any) => (
                <CommandItem
                    key={framework.id}
                    value={framework.id}
                    onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                        setSelectedCategory(he.decode(framework.name))
                    }}
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
