/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./PlayerCharacter.styles";
import Card from "../../components/Card/Card";
import AttributeInput from "../../components/Input/AttributeInput/AttributeInput";
import React, { useState } from "react";
import { attributeTypes } from "../../constants/Pathfinder/constants";

const placeholderValues = {
  characterName: "Jimbo Jones",
  characterClass: "monk",
  attributes: {
    strength: 14,
    dexterity: 15,
    constitution: 16,
    intelligence: 8,
    wisdom: 10,
    charisma: 16,
  },
  skills: {},
};

function PlayerCharacter() {
  const [internalValues, setInternalValues] = useState(placeholderValues);

  const handleAttributeChange = (type, val) => {
    const newValues = {
      ...internalValues,
    };
    newValues.attributes[type] = parseInt(val);
    setInternalValues(newValues);
  };

  const attributes = Object.keys(attributeTypes);

  return (
    <div css={styles.PlayerBody}>
      <div>
        <Card>
          <Card.Header headerTitle={"Character Stats"}></Card.Header>
          <Card.Body
            css={{ flexDirection: "column", textAlign: "left" }}
            data-testid="player-stats-card"
          >
            {attributes.map((attribute) => {
              const attributeType = attributeTypes[attribute];
              return (
                <div>
                  <div css={{ textTransform: "capitalize" }}>
                    {attributeType}
                  </div>
                  <AttributeInput
                    attributeName={attributeType}
                    attributeValues={internalValues.attributes[attributeType]}
                    handleChange={handleAttributeChange}
                  />
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Header headerTitle={"Character Skills"}></Card.Header>
          <Card.Body
            css={{ display: "flex", flexDirection: "row" }}
            data-testid="player-stats-card"
          ></Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PlayerCharacter;
