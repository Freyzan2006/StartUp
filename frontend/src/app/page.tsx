'use client'
import Header from "@/components/layout/Header/Header";
import Button from "@/components/UI/Button";
import Container from "@/components/layout/Container/Container";
import helloWorldService from "@/services/HelloWorld.service";
import { useQuery } from "@tanstack/react-query";


interface IHelloWorld {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
 
  
  // const { data, error, isLoading } = useQuery(['todo', id], () =>
  //   helloWorldService.getItem(id)
  // );

  const { data, error, isLoading } = useQuery<IHelloWorld>({
    queryKey: ["todo"],
    queryFn: async () => await helloWorldService.getItem(2),
    initialData: {
      userId: 0,
      id: 0,
      title: "",
      completed: false
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Data for item {data?.id}:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Header />
      <Button />
      <Container />
    </div>
  );
}
