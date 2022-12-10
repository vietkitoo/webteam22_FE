import Header from '../../component/header/header';
import { Button, Form } from 'react-bootstrap';
import Footer from '../../component/Footer/Footer';

function Forgot(){
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <div className="content">
                <div className="d-flex">
                <Form className="login rounded p-4 p-sm-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn btn-primary mb-4 w-100 color-btn">
                        Continue
                    </Button>
                </Form>
                </div>
            </div>
            <Footer />
        </>
        
    );
}

export default Forgot;