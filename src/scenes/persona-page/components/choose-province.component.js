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
        //add remaining options in alphabetical order:
        //<option value="ab">Alberta</option>
        //<option value="sk">Saskatchewan</option>
        //<option value="mb">Manitoba</option>
        //<option value="on">Ontario</option>
        //<option value="qc">Quebec</option>
        //<option value="nb">New Brunswick</option>
        //<option value="pe">Prince Edward Island</option>
        //<option value="ns">Nova Scotia</option>
        //<option value="yt">Yukon Territories</option>
        //<option value="nt">Northwest Territories</option>
        //<option value="nu">Nunvaut</option>
      </Select>
    </DropdownWrapper>
  </DropdownControlWrapper>
);

ChooseProvince.propTypes = {
  setProvince: PropTypes.func,
  persona: PropTypes.any
};
