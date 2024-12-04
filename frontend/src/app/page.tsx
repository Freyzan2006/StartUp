'use client'
import helloWorldService from "@/services/HelloWorld.service";
import { increment } from "@/store/counterSlice/counterSlice";
import { RootState, useAppDispatch } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";


interface IHelloWorld {
  message: string
}

export default function Home() {
 

  const dispatch = useAppDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

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

      <button onClick={() => dispatch(increment())}>
        Increment { value }
      </button>
    </div>
  );
}
