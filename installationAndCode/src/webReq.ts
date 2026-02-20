// .d.ts is a declaration file responsible for providing errors and hints
// Mostly these come along with the library we are installing, but if it didnt
// then use "npm i -D @types/some-library" after installing the library
// If there are no types present for some old library then manually make a .d.ts file 
// for that particular library using their docs.

import axios from "axios";
import type { AxiosResponse } from "axios"; // import type diappears from compiled JS

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const url: string = 'https://jsonplaceholder.typicode.com/todos/1'

const fetchData = async (url: string) => {
    try {
        const response: AxiosResponse<Todo> = await axios.get(url)
        console.log("Todo", response.data);
        
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}

// No need to import AxiosResponse manually -->
// const res = await axios.get<User>(url); Here Ts infers the type
// of response to be AxiosResponse<User, any>