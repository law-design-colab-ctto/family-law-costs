import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

import { colours, fontSizes, spacing } from "src/styles";

export const CardDarkWrapper = styled.div`
  .card-dark {
    background-color: ${colours.grayMedium};
    display: flex;
    padding: ${spacing.four};
    flex-direction: column;
    align-items: center;
    width: 15rem;
  }
  .card-dark:hover {
    background-color: ${colours.violetLight};
  }
  .chip-primary {
    background-color: ${colours.indigoMedium};
    margin-bottom: ${spacing.two};
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${colours.black};
`;

export const Name = styled.label`
  color: ${colours.black};
  text-transform: uppercase;
  font-size: ${fontSizes.p};
  font-weight: 500;
`;

export const PersonaImageWrapper = styled.div`
  font-size: ${fontSizes.display5};
`;

export const PersonaChip = styled(Chip)`
  margin-right: ${spacing.two};
`;
