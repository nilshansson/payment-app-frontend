import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/cars");
  return (
    <main className="flex flex-col items-center justify-between">

    </main>
  );
}
