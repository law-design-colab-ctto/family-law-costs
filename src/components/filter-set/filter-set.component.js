import React from "react";
import PropTypes from "prop-types";
import { equals, not, isEmpty, pipe } from "ramda";
import {
  FilterButton,
  FilterButtonSet,
  FilterButtonSetLabel,
  Divider,
  ClearIcon
} from "./filter-set.styles";
import { colours } from "src/styles";

const isFilterSelected = pipe(
  isEmpty,
  not
);

export const FilterSet = ({
  label,
  options,
  currentFilterValue,
  setFilter,
  clearFilter
}) => (
  <React.Fragment>
    <FilterButtonSetLabel>
      {label}
      {isFilterSelected(currentFilterValue) ? (
        <ClearIcon nativeColor={colours.grayDark} onClick={clearFilter} />
      ) : null}
    </FilterButtonSetLabel>
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
  setFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func
};
