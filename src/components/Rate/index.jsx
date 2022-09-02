import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./style";

export function Rate() {
  const [rate, setRate] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <Container >
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => setRate(givenRating)}
            />
            <Rating>
              <FaStar
                onDoubleClick={() => setRate(null)}
                onMouseEnter={() => setHover(givenRating)}
                onMouseLeave={() => setHover(null)}
                color={givenRating <= (hover || rate) ? "#FF859B" : "#948F99"}
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
}
