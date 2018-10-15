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
  padding: ${spacing.two} ${spacing.four};
  font-weight: 400;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.active ? colours.periwinkleBlue : colours.grayMedium};
  color: ${props => (props.active ? colours.white : colours.grayDark)};
  margin-right: ${spacing.two};
  margin-bottom: ${spacing.two};
  border-radius: 5px;

  &:hover {
    background-color: ${props =>
      props.active ? colours.periwinkleBlue : colours.periwinkleBlueLight};
    color: ${props => (props.active ? colours.white : colours.periwinkleBlue)};
  }
  @media only screen and (max-device-width: 480px) {
    font-size: ${fontSizes.p};
  }
`;

export const FilterButtonSetLabel = styled.h3`
  padding-bottom: ${spacing.three};
  margin: 0;
  font-weight: 500;
  font-size: ${fontSizes.title};
  display: flex;
  align-items: center;
  @media only screen and (max-device-width: 480px) {
    font-size: ${fontSizes.subtitle};
  }
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
