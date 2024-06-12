"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormInput from "./FormFields/FormInput";
import { CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactFormSchema = z.object({
  fullname: z
    .string()
    .min(3, { message: "Must be atlest 3 characters long" })
    .max(50),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Invalid phone number" })
    .max(10)
    .refine((val) => !isNaN(val as unknown as number)),
  service: z.enum(
    [
      "Branding Design",
      "Web Development",
      "Vivid Illustrations",
      "No Code Process Automation",
      "Digital Design",
      "Guardianship",
      "Product Development",
    ],
    { message: "Please select a service" }
  ),
  message: z.string().min(10, { message: "Must be atlest 10 characters long" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
    },
  });

  const FullnameField = form.getFieldState("fullname");
  const EmailField = form.getFieldState("email");
  const PhoneField = form.getFieldState("phone");
  const ServiceField = form.getFieldState("service");
  const MessageField = form.getFieldState("message");

  function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    console.log(data);
  }

  return (
    <div className="bg-[#F3F3F3] rounded-[20px] p-[2rem] grid place-content-center max-w-[1140px] w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <span className="text-4xl">Hi! My name is</span>
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      placeholder="First & Last Name"
                      zodField={field}
                      ErrorMessage={FullnameField.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="text-4xl">and I&apos;m</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <span className="text-4xl">
              looking for a partner to assist with
            </span>

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className=" relative">
                        <SelectTrigger
                          className={cn(
                            "flex text-[#868686] justify-center text-base font-normal bg-transparent w-[250px] border-t-0 border-r-0 border-l-0  rounded-none border-b-2 border-[#D0D0D0] focus:ring-0 focus:shadow-none focus:ring-offset-0 focus:border-[#373737] focus-visible:ring-offset-0 capitalize text-center placeholder-[#868686]",
                            [
                              ServiceField.invalid
                                ? "border-InputError focus:border-InputError placeholder:text-InputError text-InputError"
                                : "",
                            ]
                          )}
                        >
                          <SelectValue placeholder="Service" />
                        </SelectTrigger>
                        {ServiceField.invalid && (
                          <span className=" absolute top-[50%] right-[20px] translate-y-[-50%]">
                            <TooltipProvider delayDuration={200}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <CircleAlert
                                    className={cn("hidden", [
                                      ServiceField.error
                                        ? "block text-InputError"
                                        : "",
                                    ])}
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-InputError">
                                    {ServiceField.error?.message}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>
                        )}
                      </div>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Branding Design">
                        Branding Design
                      </SelectItem>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Vivid Illustrations">
                        Vivid Illustrations
                      </SelectItem>
                      <SelectItem value="No Code Process Automation">
                        No Code Process Automation
                      </SelectItem>
                      <SelectItem value="Digital Design">
                        Digital Design
                      </SelectItem>
                      <SelectItem value="Guardianship">Guardianship</SelectItem>
                      <SelectItem value="Product Development">
                        Product Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <span className="text-[40px] font-Syne">.</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <span className="text-4xl">You can reach me out at</span>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      placeholder="Email"
                      zodField={field}
                      ErrorMessage={EmailField.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="text-4xl">and</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      placeholder="Phone"
                      zodField={field}
                      ErrorMessage={PhoneField.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="text-[40px] font-Syne">.</span>
            <span className="text-4xl">Here&apos;s some more info:</span>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      placeholder="Add Details or attach a brief"
                      zodField={field}
                      ErrorMessage={MessageField.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="text-[40px] font-Syne">.</span>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
