import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const API = `https://jsonplaceholder.typicode.com/todos`;
function TodosPage() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTodos = async() => {
            try {
                const res = await fetch(API)
                const data = await res.json()
                setTodos(data)
            } catch (error) {
                console.log(error)
            }
        }
        getTodos()
    }, [])

    return (
        <div>
            <h2>To Do List</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Todos</th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((i) => (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.userId}</td>
                            <td>{i.title}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </div>
    )
}

export default TodosPage;