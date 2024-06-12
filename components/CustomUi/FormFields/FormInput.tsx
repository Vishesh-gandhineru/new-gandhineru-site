import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
type FormInputProps = {
  className?: string;
  placeholder: string;
  zodField: object;
  ErrorMessage: string | undefined;
};

const FormInput = ({
  className,
  placeholder,
  zodField,
  ErrorMessage,
}: FormInputProps) => {
  return (
    <div className=" relative">
      <Input
        placeholder={placeholder}
        className={cn(
          `text-base font-normal bg-transparent w-[300px] border-t-0 border-r-0 border-l-0  rounded-none border-b-2 border-[#D0D0D0] focus-visible:ring-0 focus:border-primary focus-visible:ring-offset-0 text-center placeholder-[#868686]`,
          [
            className,
            ErrorMessage
              ? "border-InputError focus:border-InputError placeholder:text-InputError"
              : "",
          ]
        )}
        {...zodField}
      />
      {ErrorMessage && <span className=" absolute top-[50%] right-0 translate-y-[-50%]">
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <CircleAlert
                className={cn("hidden", [
                  ErrorMessage ? "block text-InputError" : "",
                ])}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-InputError">{ErrorMessage}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </span>}
    </div>
  );
};

export default FormInput;
