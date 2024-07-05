"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormInput from "./FormFields/FormInput";
import { ArrowRight, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "./CustomButton";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";

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
  privacyPolicy: z.boolean().refine((val) => val === true, {message:"Required"}),
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
      privacyPolicy: false,
    },
  });

  const FullnameField = form.getFieldState("fullname");
  const EmailField = form.getFieldState("email");
  const PhoneField = form.getFieldState("phone");
  const ServiceField = form.getFieldState("service");
  const MessageField = form.getFieldState("message");
const PrivacyPolicyField = form.getFieldState("privacyPolicy");

  function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    console.log(data);
  }

  return (
    <div className="bg-[#F3F3F3] text-wrap rounded-[20px] py-8 px-4 md:py-14 grid place-content-center max-w-[1140px] w-full m-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <div className="flex flex-wrap gap-4 justify-center items-center w-[95%] m-auto md:w-full">
            <span className="text-xl md:text-[1.6rem] lg:text-4xl">Hi! My name is</span>
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      placeholder="First & Last Name"
                      zodField={field}
                      className="w-[200px]"
                      ErrorMessage={FullnameField.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="text-xl md:text-[1.6rem] lg:text-4xl">and I&apos;m</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center w-[95%] m-auto md:w-full">
            <span className="text-xl md:text-[1.6rem] lg:text-4xl text-center md:text-left">
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
          <div className="flex flex-wrap gap-4 justify-center items-center w-[95%] m-auto md:w-full">
            <span className="text-xl md:text-[1.6rem] lg:text-4xl">You can reach me out at</span>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      placeholder="Email"
                      zodField={field}
                      className="w-[200px]"
                      ErrorMessage={EmailField.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="text-xl md:text-[1.6rem] lg:text-4xl">and</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center w-[95%] m-auto md:w-full">
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
            <span className="text-xl md:text-[1.6rem] lg:text-4xl">Here&apos;s some more info:</span>
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[100px]">
          <FormField
          control={form.control}
          name="privacyPolicy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-center space-x-3 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="rounded-full"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className={cn("text-[#868686]" , [
                    field.value === true ? " text-primary" : "",
                    PrivacyPolicyField.invalid ? "text-InputError" : ""
                ])}>
                I agree to the Privacy Policy
                </FormLabel>
                
              </div>
            </FormItem>
          )}
        />
          <Button variant="Primary"  type="submit" className={`relative group primaryButton mr-[40px] before:bg-gradient-to-b after:bg-gradient-to-t from-transparent from-80% to-50% to-current` }>
          Let&apos;s get going! 
          
          <span className=" PrimaryButtonArrow absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2 bg-primary w-[40px] rounded-full h-full grid place-content-center">
           <ArrowRight  />
          </span>
      
      </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
