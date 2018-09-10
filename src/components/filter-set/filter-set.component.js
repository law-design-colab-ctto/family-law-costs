import React from "react";
import PropTypes from "prop-types";
import { equals, not, isEmpty, pipe } from "ramda";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ControlLabel, ClearIcon, FilterSetWrapper } from "./filter-set.styles";
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
  styleColor = "gray"
}) => (
  <FilterSetWrapper>
    <ControlLabel>
      {label}
      {isFilterSelected(currentFilterValue) ? (
        <ClearIcon nativeColor={colours.grayDark} onClick={clearFilter} />
      ) : null}
    </ControlLabel>
    <List component="ul">
      {options.map(({ optionLabel, filterType, filterValue }) => (
        <ListItem
          button
          key={`${optionLabel}${filterType}${filterValue}`}
          selected={equals(currentFilterValue, filterValue)}
          onClick={() =>
            setFilter({
              filterType,
              filterValue
            })
          }
          classes={{
            root: `filter-set-root-${styleColor}`,
            selected: `selected`
          }}
        >
          {optionLabel}
        </ListItem>
      ))}
    </List>
  </FilterSetWrapper>
);

FilterSet.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  currentFilterValue: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func,
  styleColor: PropTypes.string
};
