import { Form, Button } from "react-bootstrap";
import {useForm} from "react-hook-form"

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  }= useForm();
//Esta es la funcion que pide loguear al usuario
  const onSubmit = (productoEditado) => {
    console.log("Aqui agrego mi logica")
    console.log(productoEditado);
  }
  
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {
                  ...register('nombreProducto',{
                    required: 'Este es un dato obligatorio',
                    pattern:{
                      value:/^(?=(?:\S+\s+){0,3}\S{1,50}$)[a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*$/,
                      message:'letras o numeros sin caracteres especiales, con una longitud de 2 a 50 caracteres y un maximo 4 palabras'
                    } 
                  })
                }
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            //Valor entre 0 y $10.000
            {
                  ...register('precio',{
                    required: 'Este es un dato obligatorio',
                    pattern:{
                      value:/^(?:10000|\d{1,4})$/,
                      message:'Valor entre $0 y $10.000'
                    } 
                  })
                }
          />
          <Form.Text className="text-danger">
                {errors.precio?.message}
          </Form.Text>
       
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
      
          />
      
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
       
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
