import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";
import {
  FilterButton,
  FilterButtonSet,
  FilterButtonSetLabel,
  Divider
} from "./filter-set.styles";

export const FilterSet = ({
  label,
  options,
  currentFilterValue,
  setFilter
}) => (
  <React.Fragment>
    <FilterButtonSetLabel>{label}</FilterButtonSetLabel>
    <FilterButtonSet>
      {options.map(({ optionLabel, filterType, filterValue }) => (
        <FilterButton
          key={`${optionLabel}${filterType}${filterValue}`}
          active={equals(currentFilterValue, filterValue)}
          onClick={() =>
            setFilter({
              filterType,
              filterValue
            })
          }
        >
          {optionLabel}
        </FilterButton>
      ))}
    </FilterButtonSet>
    <Divider />
  </React.Fragment>
);

FilterSet.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  currentFilterValue: PropTypes.string,
  setFilter: PropTypes.func.isRequired
};
