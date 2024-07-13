"use client";

import React, { useState } from "react";
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
import axios from "axios";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  const FullnameField = form.getFieldState("fullname");
  const EmailField = form.getFieldState("email");
  const MailerLite_URL = process.env.NEXT_PUBLIC_MAILERLITE_BASE_URL;
  const MailerLite_API = process.env.NEXT_PUBLIC_MAILERLITE_API_KEY;

  function onSubmit(values: z.infer<typeof NewsletterFormSchema>) {
    console.log(values);
    setIsSubmitting(true);
    const params = {
      email: values.email,
      fields: {
        name: values.fullname,
      },
      status: "active", // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
    };

    const config = {
      headers: {
        Authorization: `Bearer ${MailerLite_API}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .post(`${MailerLite_URL}/subscribers`, params, config)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }
      })
      .catch((error) => {
        if (error.response) console.log(error.response.data);
        if (error.response === 400) {
          setIsError(true);
          setIsSubmitting(false);
        }
      });
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
        <div className="flex justify-start items-center gap-6">
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
          <div>
           {isSubmitting && <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#ddd"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg> }
        {isSubmitted && <span className="mt-5">Thank you we will get in touch soon</span>}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default NewsLetterForm;
