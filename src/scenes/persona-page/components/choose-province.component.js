import React from "react";
import PropTypes from "prop-types";

import {
  DropdownControlWrapper,
  DropdownWrapper
} from "../persona-page.styles";
import { capitalize } from "src/utils";
import Select from "@material-ui/core/Select";

export const ChooseProvince = ({ setProvince, persona }) => (
  <DropdownControlWrapper>
    <div>{`${capitalize(persona.name)} lives in`}</div>
    <DropdownWrapper>
      <Select
        native
        value={"on"}
        onChange={e => setProvince({ province: e.target.value })}
        inputProps={{
          name: "province",
          id: "province-input"
        }}
      >
        <option value="on">Ontario</option>
      </Select>
    </DropdownWrapper>
  </DropdownControlWrapper>
);

ChooseProvince.propTypes = {
  setProvince: PropTypes.func,
  persona: PropTypes.any
};
