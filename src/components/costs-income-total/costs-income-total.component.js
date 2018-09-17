import React from "react"
import PropTypes from "prop-types"
import { InformationCard,
         CenteredContent,
         LargeCostDisplay } from "../../scenes/persona-page/persona-page.styles"
import { BlueBar,
         GreyBar } from "./costs-income-total.styles"

export const CostsIncomeWithBars = ({ totalDirectCosts, income }) => (
  <InformationCard>
    <CenteredContent>Total Direct Costs</CenteredContent>
    <CenteredContent>
      <LargeCostDisplay>{totalDirectCosts}</LargeCostDisplay>
    </CenteredContent>

    {parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10)}
    <br />
    {parseInt(income.replace(/[,$]/g, ""), 10)}
    <br />
    {parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
     parseInt(income.replace(/[,$]/g, ""), 10) ?
     "this: income should beb 100" :
     "costs should be 100%"}
    <br />
    {parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
     parseInt(income.replace(/[,$]/g, ""), 10) ?
     "this: income should be 100%" :
     "costs should be 100%"}
    <br />
    For top bar of costs:
    {
      parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
      parseInt(income.replace(/[,$]/g, ""), 10) ?
      parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) /
      parseInt(income.replace(/[,$]/g, ""), 10) * 100 :
      100
    }
    <br />
    For bottom bar of income:
    {
      parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
      parseInt(income.replace(/[,$]/g, ""), 10) ?
      100 :
      parseInt(income.replace(/[,$]/g, ""), 10) /
      parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) * 100
    }

    Costs <BlueBar variant="determinate"
            value={
              parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
              parseInt(income.replace(/[,$]/g, ""), 10) ?
              parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) /
              parseInt(income.replace(/[,$]/g, ""), 10) * 100 :
              100
            } />
    <br />
    Income <GreyBar variant="determinate"
            value={
              parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
              parseInt(income.replace(/[,$]/g, ""), 10) ?
              100 :
              parseInt(income.replace(/[,$]/g, ""), 10) /
              parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) * 100
            } />
  </InformationCard>
)

CostsIncomeWithBars.propTypes = {
  totalDirectCosts: PropTypes.string,
  income: PropTypes.string
};
