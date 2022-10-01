import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Testing Example</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Why Do We Need Test?</Card.Title>
                    <Card.Text>
                    To guarantee our code.
                    </Card.Text>
                    <Button onClick={() => navigate("/todos")} variant="primary">To Do List</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomePage;