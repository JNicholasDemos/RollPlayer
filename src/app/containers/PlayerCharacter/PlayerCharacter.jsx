/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./PlayerCharacter.styles";
import Card from "../../components/Card/Card";
import AttributeInput from "../../components/Input/AttributeInput/AttributeInput";
import Input from "../../components/Input/Input";
import React, { useState } from "react";
import {
  attributeTypes,
  skillTypes,
} from "../../constants/Pathfinder/constants";

const placeholderValues = {
  characterName: "Jimbo Jones",
  characterClass: "monk",
  armorWeightPenalty: -1,
  attributes: {
    strength: 14,
    dexterity: 15,
    constitution: 16,
    intelligence: 8,
    wisdom: 10,
    charisma: 16,
  },
  skills: {
    Acrobatics: 4,
  },
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

  const handleSkillChange = (skillType) => (val) => {};

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
          >
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
            >
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr 1fr 1fr 1fr 1fr",
                  gridColumnGap: "6px",
                  alignItems: "center",
                }}
              >
                <div css={{ textAlign: "left" }}>Skill</div>
                <div css={{ textAlign: "right" }}>Ranks</div>
                <div css={{ textAlign: "right" }}>Trained Bonus</div>
                <div css={{ textAlign: "right" }}>Attribute Bonus</div>
                <div css={{ textAlign: "right" }}>Armor Penalty</div>
                <div css={{ textAlign: "right" }}>Final Value</div>
                {skillTypes.map((skillType) => {
                  let ranks = internalValues.skills[skillType.name] || 0;
                  let attributeBonus = Math.floor(
                    (placeholderValues.attributes[
                      skillType.dependentAttribute
                    ] -
                      10) /
                      2
                  );
                  const applyClassSkillBonus =
                    skillType.availableClasses.includes(
                      internalValues.characterClass
                    ) && ranks > 0;
                  let finalValue = ranks;
                  let displayArmorPenalty = 0;
                  if (applyClassSkillBonus) {
                    finalValue += 3; //class skill bonus
                  }
                  finalValue += attributeBonus;
                  if (skillType.armorPenalty) {
                    displayArmorPenalty =
                      internalValues.armorWeightPenalty || 0;
                    finalValue += internalValues.armorWeightPenalty || 0;
                  }
                  return [
                    <div
                      css={{ textTransform: "capitalize", textAlign: "left" }}
                    >
                      {skillType.name}
                    </div>,
                    <div css={{ textAlign: "right" }}>
                      <Input
                        onChange={handleSkillChange(skillType.name)}
                        id={`${skillType.name}-input`}
                        data-testid={`${skillType.name}-input`}
                        placeholder={`Ranks`}
                        value={ranks || 0}
                        textAlign={"right"}
                      />
                    </div>,
                    <div css={{ textAlign: "right" }}>
                      {applyClassSkillBonus ? "3" : "-"}
                    </div>,
                    <div css={{ textAlign: "right" }}>{attributeBonus}</div>,
                    <div
                      css={{ textAlign: "right" }}
                    >{` ${displayArmorPenalty} `}</div>,
                    <div css={{ textAlign: "right" }}>{finalValue}</div>,
                  ];
                })}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PlayerCharacter;
