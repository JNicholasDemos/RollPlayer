/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Input from "../Input";

const AttributeInput = (props) => {
  const { attributeName, attributeValues, handleChange } = props;
  const handleInputChange = (type) => (val) => {
    handleChange(type, val);
  };
  return (
    <Input
      onChange={handleInputChange(attributeName)}
      id={`${attributeName}-input`}
      data-testid={`${attributeName}-input`}
      placeholder={`enter ${attributeName}`}
      value={attributeValues || 0}
      textAlign={"right"}
    />
  );
};

export default AttributeInput;
