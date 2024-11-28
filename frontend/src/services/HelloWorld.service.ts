
import { BaseUrl, HelloWorldURL } from "@/api/apiUrl";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

class HelloWorldService {
    private URL: string;

    constructor() {
        this.URL = BaseUrl.FullApiURL(HelloWorldURL);
    }

    async getItem(id: number) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.data;
    }

    async getItems() {
        const response = await axios.get(`${this.URL}`);
        return response.data;
    }
    
}

const helloWorldService = new HelloWorldService()

export default helloWorldService;