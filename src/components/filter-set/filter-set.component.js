import React from "react";
import PropTypes from "prop-types";
import { equals, not, isEmpty, pipe } from "ramda";
import {
  FilterButton,
  FilterButtonSet,
  FilterButtonSetLabel,
  ClearIcon
} from "./filter-set.styles";
import Grid from "@material-ui/core/Grid";
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
  clearFilter,
  labelSize = "small"
}) => (
  <React.Fragment>
    <FilterButtonSetLabel>
      {label}
      {isFilterSelected(currentFilterValue) ? (
        <ClearIcon nativeColor={colours.grayDark} onClick={clearFilter} />
      ) : null}
    </FilterButtonSetLabel>
    <FilterButtonSet>
      <Grid container spacing={8}>
        {options.map(({ optionLabel, filterType, filterValue }) => (
          <Grid
            item
            xs={12}
            sm={labelSize === "small" ? 4 : 12}
            md={4}
            key={`${optionLabel}${filterType}${filterValue}`}
          >
            <FilterButton
              key={`${optionLabel}${filterType}${filterValue}`}
              active={equals(currentFilterValue, filterValue)}
              numberOfButtons={options.length}
              onClick={() =>
                setFilter({
                  filterType,
                  filterValue
                })
              }
            >
              {optionLabel}
            </FilterButton>
          </Grid>
        ))}
      </Grid>
    </FilterButtonSet>
  </React.Fragment>
);

FilterSet.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  currentFilterValue: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func,
  labelSize: PropTypes.oneOf(["small", "large"])
};
