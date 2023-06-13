"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/lib/shadcn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/lib/shadcn/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/lib/shadcn/select";

import { Input } from "../../../components/lib/shadcn/input";
import { DataTable } from "../../../components/lib/shadcn/datatable";
import { columns } from "./components/columns";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Status } from "@prisma/client";
import Loading from "./loading";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  statusId: z.string().min(1, {
    message: "Please select a status",
  }),
});

function Category() {
  const [isLoading, setIsLoading] = useState(false);
  const [statuses, setStatuses] = useState([]);
  const [categories, setCategories] = useState([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      statusId: "",
    },
  });

  useEffect(() => {
    getStatuses();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await axios.post("/api/categories", values);
      getCategories();
      toast.success("Category added successfully!");
    } catch (e) {
      toast.error("Something went wrong");
    }

    setIsLoading(false);
  };

  const getStatuses = async () => {
    setIsLoading(true);

    try {
      const results = await axios.get("/api/statuses");
      setStatuses(results.data);
    } catch (e) {
      toast.error("Something went wrong");
    }
    setIsLoading(false);
  };

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const results = await axios.get("/api/categories");
      const cats = [];

      results.data.forEach((d: any) => {
        const cat = {
          ...d,
          status: d.status.name,
        };

        cats.push(cat);
      });
      console.log("categories", cats);
      setCategories(cats);
    } catch (e) {
      toast.error("Something went wrong");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-row gap-2">
      {isLoading && <Loading />}

      <div className="flex-1">
        <div className="bg-white shadow-sm rounded-sm p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Category Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {statuses.length > 0 && (
                <FormField
                  control={form.control}
                  name="statusId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {statuses.map((stat: Status) => (
                            <SelectItem key={stat.id} value={stat.id}>
                              {stat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white shadow-sm rounded-sm p-5">
          <DataTable columns={columns} data={categories} />
        </div>
      </div>
    </div>
  );
}

export default Category;
