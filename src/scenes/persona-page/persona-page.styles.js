import styled from "styled-components";

import { spacing, fontSizes, colours } from "src/styles";
import { ButtonReset } from "src/components";

export const PersonaTextRegular = styled.div`
  padding: ${spacing.three} 0;
  font-size: ${fontSizes.subtitle};
`;

export const PersonaTextBold = styled.div`
  font-size: ${fontSizes.subtitle};
  font-weight: 500;
  padding: ${spacing.three} 0;
`;

export const MoreDetailsButton = styled(ButtonReset)`
  border-radius: 3px;
  background-color: ${colours.lighterIndigo};
  color: ${colours.darkIndigo};
  text-transform: uppercase;
  padding: ${spacing.two} ${spacing.three};
  font-size: ${fontSizes.p};
  margin-top: ${spacing.four};
`;

export const SectionHeader = styled.h2`
  margin: 0;
  font-size: ${fontSizes.display2};
  color: ${colours.black};
  font-weight: 400;
  padding-bottom: ${spacing.three};
`;

export const SectionSubheader = styled.h3`
  margin: 0;
  font-size: ${fontSizes.display1};
  font-weight: 400;

  color: ${colours.black};
`;

export const SectionBlock = styled.div`
  padding: ${spacing.three} 0;
`;

export const Subsection = styled.div`
  padding: ${spacing.three} 0 ${spacing.five} 0;
`;

export const CenteredContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ControlWrapper = styled.div`
  display: flex;
  padding: ${spacing.two} 0;
`;

export const DropdownControlWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: ${spacing.two} 0;
`;

export const SliderWrapper = styled.div`
  flex-grow: 1;
  margin-left: ${spacing.two};
`;

export const DropdownWrapper = styled.div`
  flex-grow: 0;
  margin-left: ${spacing.two};
`;
