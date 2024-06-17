import { createServer } from 'http';
const PORT = process.env.PORT;

const user = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

const server = createServer((req, res) => {
      
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});