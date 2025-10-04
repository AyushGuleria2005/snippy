import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container flex justify-between mx-auto px-20 mt-14">
        <h2 className="font-bold text-2xl">Snippets</h2>
        <Link href={"/snippet/new"}><Button className="cursor-pointer">New +</Button></Link>
      </div>
    </div>
  );
}
