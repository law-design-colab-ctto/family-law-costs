import styled from "styled-components";
import { colours, spacing } from "src/styles";
import { fontSizes } from "../../styles/fontSizes";
import { ButtonReset, HrReset } from "src/components";
import { XIcon } from "src/assets/icons";

export const FilterButtonSet = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;
  margin-bottom: ${spacing.three};
`;

export const FilterButton = styled(ButtonReset)`
  font-size: ${fontSizes.title};
  padding: ${spacing.three} ${spacing.four};
  font-weight: 400;
  flex-grow: 1;
  background-color: ${props =>
    props.active ? colours.darkIndigo : colours.mediumGray};
  color: ${props => (props.active ? colours.white : colours.darkGray)};
  border-right: 1px solid ${colours.white};

  &:hover {
    background-color: ${props =>
      props.active ? colours.darkIndigo : colours.lightIndigo};
    color: ${props => (props.active ? colours.white : colours.darkIndigo)};
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`;

export const FilterButtonSetLabel = styled.h3`
  padding-bottom: ${spacing.three};
  margin: 0;
  font-weight: 500;
  font-size: ${fontSizes.title};
  display: flex;
  align-items: center;
`;

export const Divider = styled(HrReset)`
  border-bottom: 1px solid ${colours.mediumDarkGray};
  width: 100%;
  margin-bottom: ${spacing.three};
`;

export const ClearIcon = styled(XIcon)`
  padding-left: ${spacing.two};
  &:hover {
    cursor: pointer;
  }
`;
