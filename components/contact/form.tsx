'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Send us a Message</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            placeholder="Your Name"
            {...form.register('name')}
            className="w-full"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Email Address"
            type="email"
            {...form.register('email')}
            className="w-full"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Company (Optional)"
            {...form.register('company')}
            className="w-full"
          />
        </div>

        <div>
          <Input
            placeholder="Phone Number"
            type="tel"
            {...form.register('phone')}
            className="w-full"
          />
          {form.formState.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            {...form.register('message')}
            className="w-full"
            rows={5}
          />
          {form.formState.errors.message && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#1a237e] hover:bg-[#1a237e]/90 text-white"
        >
          Send Message
        </Button>
      </form>
    </Card>
  );
}