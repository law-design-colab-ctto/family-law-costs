import styled from "styled-components";
import { colours, spacing } from "src/styles";
import { fontSizes } from "../../styles/fontSizes";
import { ButtonReset, HrReset } from "src/components";
import { XIcon } from "src/assets/icons";

export const FilterButtonSet = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: ${spacing.two};
`;

export const FilterButton = styled(ButtonReset)`
  font-size: ${fontSizes.title};
  padding: ${spacing.three} ${spacing.four};
  font-weight: 400;
  flex-grow: 1;
  background-color: ${props =>
    props.active ? colours.periwinkleBlue : colours.grayMedium};
  color: ${props => (props.active ? colours.white : colours.grayDark)};
  border-right: 1px solid ${colours.white};
  margin-bottom: ${spacing.two};

  &:hover {
    background-color: ${props =>
      props.active ? colours.periwinkleBlue : colours.periwinkleBlueLight};
    color: ${props => (props.active ? colours.white : colours.periwinkleBlue)};
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`;

export const ControlLabel = styled.h3`
  padding-bottom: ${spacing.three};
  margin: 0;
  font-weight: 500;
  font-size: ${fontSizes.title};
  display: flex;
  align-items: center;
`;

export const Divider = styled(HrReset)`
  border-bottom: 1px solid ${colours.grayMediumDark};
  width: 100%;
  margin-bottom: ${spacing.three};
`;

export const ClearIcon = styled(XIcon)`
  padding-left: ${spacing.two};
  &:hover {
    cursor: pointer;
  }
`;

export const FilterSetWrapper = styled.div`
  padding: ${spacing.three} 0;
  max-width: 30rem;
  .filter-set-root-gray,
  .filter-set-root-violet {
    border-bottom: 1px solid ${colours.grayMedium};
  }

  .filter-set-root-gray.selected {
    background-color: ${colours.grayMedium};
  }
  .filter-set-root-violet.selected {
    background-color: ${colours.violetLight};
  }
  .filter-set-root-violet:hover {
    background-color: ${colours.violetLight};
  }
`;
