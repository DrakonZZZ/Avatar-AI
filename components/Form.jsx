'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Separator } from './ui/separator';
import ImageUploader from './ImageUploader';

const formSchema = z.object({
  name: z.string().min(5, { message: 'Name is required' }),
  catogoryID: z.string().min(1, { message: 'Category is required.' }),
  description: z.string().min(10, { message: 'Description is required' }),
  flags: z.string().min(100, { message: 'Flags must be atleast 200 char.' }),
  seed: z.string().min(100, { message: 'Seed must be atleast 200 char.' }),
  imgSrc: z.string().min(1, { message: 'Image is required.' }),
});

const AvatarForm = ({ avatarData, category }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: undefined,
      description: '',
      flags: '',
      seed: '',
      imgSrc: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values) => {
    console.log(value);
  };

  return (
    <section className="h-full max-w-3xl m-auto p-4 space-y-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10"
        >
          <div className="w-full space-y-2">
            <div>
              <h3 className="font-medium text-lg">General Information</h3>
              <p className="text-sm text-muted-foreground">
                Information about your avatar
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="src"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4">
                <FormControl>
                  <ImageUploader
                    value={field.value}
                    changehandler={field.onChange}
                    check={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
};

export default AvatarForm;
