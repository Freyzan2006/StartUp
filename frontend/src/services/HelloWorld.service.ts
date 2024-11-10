
import { BaseUrl, HelloWorldURL } from "@/api/apiUrl";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

class HelloWorldService {
    private URL: string;

    constructor() {
        this.URL = BaseUrl.FullApiURL(HelloWorldURL);
        console.log(this.URL)
    }

    async getItem(id: number) {
        // // https://jsonplaceholder.typicode.com/todos/1

        // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        //     cache: "force-cache",
        //     next: {
        //         revalidate: 3600
        //     }
        // });

        // const data = await response.json();

        // return data;

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.data;
    }
    
}

const helloWorldService = new HelloWorldService()

export default helloWorldService;