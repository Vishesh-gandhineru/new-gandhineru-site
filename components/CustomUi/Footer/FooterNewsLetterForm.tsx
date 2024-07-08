"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormInput from "../FormFields/FormInput";
import { ArrowRight } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "../CustomButton";

const NewsletterFormSchema = z.object({
  fullname: z
    .string()
    .min(3, { message: "Must be atlest 3 characters long" })
    .max(50),
  email: z.string().email({ message: "Invalid email address" }),
});

type NewsLetterFormProps = {
  className?: string;
};

const NewsLetterForm = ({ className }: NewsLetterFormProps) => {
  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  const FullnameField = form.getFieldState("fullname");
  const EmailField = form.getFieldState("email");

  function onSubmit(values: z.infer<typeof NewsletterFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", [className])}
      >
        <div className="w-full md:w-fit flex flex-col md:flex-row gap-5 justify-start items-start">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="w-full md:w-fit">
                <FormControl>
                  <FormInput
                    placeholder="Name"
                    zodField={field}
                    ErrorMessage={FullnameField.error?.message}
                    className="w-full md:w-fit lg:w-fit text-start text-sm pl-0 pb-1"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:w-fit">
                <FormControl>
                  <FormInput
                    placeholder="Email"
                    zodField={field}
                    ErrorMessage={EmailField.error?.message}
                    className="w-full lg:w-fit text-start text-sm pl-0 pb-1"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-start items-center">
          <Button
            variant="Primary"
            type="submit"
            className={cn(
              "relative group primaryButton mr-[40px] before:bg-gradient-to-b after:bg-gradient-to-t from-transparent from-80% to-50% to-current overflow-visible"
            )}
          >
            
              <span>im ready!</span>
              <span
                className={cn(
                  "PrimaryButtonArrow absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2 bg-inherit before:bg-inherit w-[40px] rounded-full h-full grid place-content-center"
                )}
              >
                <ArrowRight />
              </span>
            
          </Button>
          
        </div>
      </form>
    </Form>
  );
};

export default NewsLetterForm;
