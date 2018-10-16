import { NavLink } from "../../../components/site-header/site-header.styles";
import { SeeMoreButton } from "../persona-page.styles";
import React from "react";


export const SeeMorePersonas = () => {
  return(
    <SeeMoreButton>
      <NavLink to="/">See More Personas </NavLink>
    </SeeMoreButton>
  )
}