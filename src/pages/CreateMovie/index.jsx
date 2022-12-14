import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useState } from "react";

import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { TextLink } from "../../components/TextLink";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";

export function CreateMovie() {
  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState("");

  function handleAddMarker() {
    setMarkers(prevState => [...prevState, newMarker]);
    setNewMarker("");
  }

  function handleRemoveMarker(removed) {
    setMarkers(prevState => prevState.filter(marker => marker !== removed));
  }

  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
          <FiArrowLeft /> Back
        </Link>

        <Section title="New Movie" />

        <div className="inputs">
          <Input type="text" placeholder="Title" />
          <Input type="number" placeholder="Rate (from 0 to 5)" />
        </div>

        <TextArea placeholder="Observations" />

        <Section title="Markers" />
        <div className="notes">
          {markers.map((marker, index) => (
            <NoteItem
              key={String(index)}
              value={marker}
              onClick={() => handleRemoveMarker(marker)}
            />
          ))}

          <NoteItem
            isNew
            placeholder="New Marker"
            value={newMarker}
            onChange={event => setNewMarker(event.target.value)}
            onClick={handleAddMarker}
          />
        </div>
      </main>

      <footer>
        {/* <Button title="Exclude Movie" /> */}
        <Button title="Save Changes" />
      </footer>
    </Container>
  );
}
