import { Container } from "react-bootstrap";
import CarouselHome from '../view/CarouselHome';
const Home = () => {
  return (
    <Container className="mt-4">
  
      <section className="text-center mt-5 mb-5">
        <h1>Bienvenido a MercadoLibre</h1>
        <p className="lead">Encuentra los mejores productos al mejor precio</p>      
      </section>
      

      <section className="border-top pt-5 mt-5">
        <div className="text-center">
          <h2>Productos Destacados</h2>
        </div>

        <div> 
          <CarouselHome />           
        </div>
      </section>
    </Container>
  )
}

export default Home;
