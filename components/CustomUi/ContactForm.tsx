"use client"

import React from 'react'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import FormInput from './FormFields/FormInput'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"




const ContactFormSchema = z.object({
    fullname : z.string().min(3 , {message: "Must be atlest 3 characters long"}).max(50),
    email : z.string().email({message: "Invalid email address"}),
    phone : z.number().min(10 , {message: "Invalid phone number"}).max(10),
    service : z.string(),
    message : z.string().optional()
})

const ContactForm = () => {
  
    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            fullname: "",
            email: "",
            phone: 8888888888,
            service: "",
            message: "",
        },
      })

    function onSubmit(data: z.infer<typeof ContactFormSchema>) {
        console.log(data)
    }

  return (
    <div className='bg-[#F3F3F3] rounded-[20px] p-[2rem] grid place-content-center'>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='flex flex-wrap gap-4 justify-center items-center'>
            <h2>Hi! My name is</h2>
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <FormInput placeholder='First & Last Name' zodField={field}/>
             </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h2>and I&apos;m</h2>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default ContactForm