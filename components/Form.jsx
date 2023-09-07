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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { arnold } from '@/utils/personality';
import { Button } from './ui/button';
import { Wand } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(5, { message: 'Name is required' }),
  categoryID: z.string({
    required_error: 'Please select category',
  }),
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
      categoryID: undefined,
      description: '',
      flags: '',
      seed: '',
      imgSrc: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section className="h-full max-w-3xl m-auto p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="detail">Detail</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="w-full space-y-2">
                <div>
                  <h3 className="font-medium text-lg text-center">
                    General Information
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-10">
                    Information about your avatar
                  </p>
                </div>
              </div>
              <FormField
                name="src"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center justify-center space-y-4 mb-10">
                    <FormControl>
                      <ImageUploader
                        value={field.value}
                        changehandler={field.onChange}
                        disabled={isLoading}
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
                          disabled={isLoading}
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
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-1">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="former professional bodybuilder, actor and politician"
                          disabled={isLoading}
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
                        onValueChange={field.onChange}
                        disabled={isLoading}
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
            </TabsContent>

            <TabsContent value="detail" className="flex flex-col space-y-4">
              <div className="space-y-2 w-full">
                <div>
                  <h3 className="text-lg font-medium text-center">Settings</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Instructions or Flags for Avatar Behaviour
                  </p>
                </div>
              </div>
              <FormField
                name="flags"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Instructions</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={8}
                        className="resize-none"
                        placeholder={arnold.personality}
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Detailed description about your avatar and how they should
                      behave
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="seed"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Test Conversation</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={8}
                        className="resize-none"
                        placeholder={arnold.dummyChat}
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Detailed description about your avatar and how they should
                      behave
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
          </Tabs>
          <div className="w-full flex justify-center">
            <Button size="lg" disabled={isLoading}>
              {avatarData ? 'Edit your avater' : 'Create your avatar'}
              <Wand className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default AvatarForm;
