const url = 'https://jsonplaceholder.typicode.com/todos/1';
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
    }
    catch (error) {
    }
};
export {};
//# sourceMappingURL=fetchReq.js.map