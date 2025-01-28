import * as React from "react";
import { Table, Pagination } from "react-bootstrap";
import { Superhero } from "../types/superhero";

interface SuperheroListProps {
  superheroes: Superhero[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const SuperheroList: React.FC<SuperheroListProps> = ({
  superheroes,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Superpower</th>
            <th>Humility Score</th>
          </tr>
        </thead>
        <tbody>
          {superheroes.map((hero) => (
            <tr key={hero.id}>
              <td>{hero.name}</td>
              <td>{hero.superpower}</td>
              <td>{hero.humilityScore}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First disabled={currentPage === 1} onClick={() => onPageChange(1)} />
        <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
            {page}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        />
        <Pagination.Last disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default SuperheroList;
