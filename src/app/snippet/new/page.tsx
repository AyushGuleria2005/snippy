import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const NewSnippet = () => {
  const createSnippet = async (formData:FormData) => {
    "use server"
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //Save the formData in the database
    const snippet = await prisma.snippet.create({
        data:{
            title,code
        }
    })

    console.log("Data saved in database "+snippet);
    redirect("/");

  };
  return (
    <form className="container mx-auto px-20 mt-14" action={createSnippet}>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="title" className="font-bold text-2xl">
          Title
        </Label>
        <Input type="text" id="title" placeholder="Title" name="title" />
      </div>
      <div className="grid w-full gap-3 mt-10">
        <Label htmlFor="code" className="font-bold text-2xl">
          Your Code
        </Label>
        <Textarea placeholder="Type your code here" id="code" name="code" />
      </div>
      <Button className="mt-6" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewSnippet;
