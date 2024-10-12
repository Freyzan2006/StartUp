'use client'
import helloWorldService from "@/services/HelloWorld.service";
import { useEffect, useState } from "react";

interface IHelloWorld {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {

  const [ helloWorld, setHelloWorld ] = useState<IHelloWorld>();


  useEffect(() => {
    const request = async () => {
      setHelloWorld(await helloWorldService.getItem(2));
    }

    request()
  }, []);


  return (
   <main>
      <ul className = "p-2">
        <li>ID: { helloWorld?.id }</li>
        <li>UserID: { helloWorld?.userId }</li>
        <li>Title: { helloWorld?.title }</li>
        <li>Completed: { helloWorld?.completed ? "Готово" : "Не готово" }</li>
      </ul>
   </main>
  );
}
