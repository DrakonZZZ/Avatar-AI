'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Separator } from './ui/separator';
import ImageUploader from './ImageUploader';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';
import { arnold } from '@/utils/personality';

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
              <h3 className="font-medium text-lg text-center">
                General Information
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Information about your avatar
              </p>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Arnold Schwarzenegger"
                      check={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Name of your avatar will displayed
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="Description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="former professional bodybuilder, actor and politician"
                      check={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Description about the person or fictional character
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="categoryID"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>categoryID</FormLabel>
                  <Select
                    value={field.value}
                    defaultValue={field.value}
                    valueChange={field.onChange}
                    check={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {category.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormDescription className="text-xs">
                    Select a category for your Avatar
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className="bg-primary/10" />
          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg font-medium text-center">Settings</h3>
              <p className="text-sm text-muted-foreground text-center">
                Instructions or Flags for Avatar Behaviour
              </p>
            </div>
          </div>
          <FormField
            name="instructions"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    className="resize-none"
                    placeholder={arnold.personality}
                    check={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Detailed decription about your avatar and how they should
                  behave
                </FormDescription>
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
