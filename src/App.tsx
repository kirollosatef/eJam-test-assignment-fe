import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";
import { superheroApi } from "./api/superheroApi";
import { Superhero } from "./types/superhero";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadSuperheroes = async () => {
    try {
      setIsLoading(true);
      const response = await superheroApi.getAll(currentPage);
      setSuperheroes(response.data);
      setTotalPages(response.meta.lastPage);
    } catch (error) {
      console.error("Failed to load superheroes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSuperheroes();
  }, [currentPage]);

  const handleAddSuperhero = async (superhero: Omit<Superhero, "id">) => {
    await superheroApi.create(superhero);
    loadSuperheroes();
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1>Superhero Registry</h1>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <h2>Add New Superhero</h2>
          <SuperheroForm onSubmit={handleAddSuperhero} />
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Superheroes by Humility</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <SuperheroList
              superheroes={superheroes}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
