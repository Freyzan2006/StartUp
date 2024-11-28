'use client'
import helloWorldService from "@/services/HelloWorld.service";
import { useQuery } from "@tanstack/react-query";


interface IHelloWorld {
  message: string
}

export default function Home() {
 

  // const { data, error, isLoading } = useQuery(['todo', id], () =>
  //   helloWorldService.getItem(id)
  // );

  const { data, error, isLoading } = useQuery<IHelloWorld>({
    queryKey: ["helloWorld"],
    queryFn: async () => await helloWorldService.getItems(),
    initialData: {
      message: ""
    }
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Data for item:</h1>
      <pre>Ответ: { data.message }</pre>
    </div>
  );
}
