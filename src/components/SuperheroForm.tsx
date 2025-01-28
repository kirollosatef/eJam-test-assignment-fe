import * as React from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

interface SuperheroFormProps {
  onSubmit: (superhero: { name: string; superpower: string; humilityScore: number }) => Promise<void>;
}

const SuperheroForm: React.FC<SuperheroFormProps> = ({ onSubmit }: SuperheroFormProps) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState(5);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({ name, superpower, humilityScore });
      // Reset form
      setName("");
      setSuperpower("");
      setHumilityScore(5);
      setError("");
    } catch (err) {
      setError("Failed to add superhero. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Superpower</Form.Label>
        <Form.Control
          type="text"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Humility Score (0-10)</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="10"
          value={humilityScore}
          onChange={(e) => setHumilityScore(Number(e.target.value))}
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Add Superhero
      </Button>
    </Form>
  );
};

export default SuperheroForm;
