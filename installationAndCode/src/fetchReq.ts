interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const url: string = 'https://jsonplaceholder.typicode.com/todos/1'

const fetchData = async (url: string) => {
    try {
        const response =  await fetch(url)
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }
        const data: Todo = await response.json()
    } catch (error: any) {
        
    }
}


