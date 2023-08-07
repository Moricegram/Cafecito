
import { Form, Button, Container, Card } from "react-bootstrap";
import {useForm} from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  }= useForm();
//Esta es la funcion que pide loguear al usuario
  const onSubmit = (usuario) => {
    console.log("Aqui agrego mi logica")
    console.log(usuario);
  }

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {
                  ...register('email',{
                    required: 'El email es un dato obligatorio',
                    pattern:{
                      value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:'El email debe cumplir con un formato valido como el siguiente: mail@mail.com'
                    } 
                  })
                }
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {
                  ...register('password',{
                    required: "El password es un dato obligatorio",
                    pattern: {
                      value:/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message: "El password de tener letras mayusculas, minusculas y entre 8 y 16 caracteres"
                    }
                  })
                }
               
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;


