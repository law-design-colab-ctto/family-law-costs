import React, { Component } from "react";
import { SiteHeader, SiteFooter } from "src/components";
import { InfoParagraph } from "../../components/info-paragraph/info-paragraph.component";
import { InfoHeader } from "../../components/info-header/info-header.component";
import { InfoSubheader } from "../../components/info-subheader/info-subheader.component";

export default class InfoPageAbout extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteHeader />
        <InfoHeader>About Out-of-Pocket</InfoHeader>
        <InfoParagraph>
          It is hard to calculate the real cost of a family law disputes in Canada. Yet it is difficult to improve the system or make changes to court processes or services without an understanding of the costs to people in the family system. The Out-of-Pocket tool is transferable to any Canadian jurisdiction and generates concrete, local costs information about family law processes to influence public policy, legal reform and media conversations about access to justice in the family context. This site helps to put a dollar figure on the out-of-pockets costs to individuals and families during a family law dispute.
        </InfoParagraph>
        <InfoParagraph>
          <b>This website is best viewed on desktop.</b>
        </InfoParagraph>
        <InfoSubheader>What does it do?</InfoSubheader>
        <InfoParagraph>
          This tool calculates and compares typical costs including the money people spend during their legal dispute and the money they lose through missed work. It is NOT a tool to predict anyone’s individual costs or provide a customizable estimate. Instead, it uses typical stories, and generalizes typically consequences to produce a dollar amount.
        </InfoParagraph>
        <InfoSubheader>What is this for?</InfoSubheader>
        <InfoParagraph>
          This tool can help individuals, governments, media and researchers to understand the implications of family law. It can be used to compare between provinces or between income levels to better understand how family law disputes affect people’s finances.
        </InfoParagraph>
        <InfoSubheader>How does it work?</InfoSubheader>
        <InfoParagraph>
          The calculations included in this tool are based on research of litigants about their experiences in family law disputes, as well as statistics from across the country about the cost of childcare, legal services, and other related expenses. These have been grouped by region and provide a snapshot of family law costs, not a specific estimate. You can click on each calculation to see how it was calculated and to examine the sources of the data.
        </InfoParagraph>
        <InfoSubheader>Who made this tool?</InfoSubheader>
        <InfoParagraph>


        </InfoParagraph>
        <InfoParagraph>

        </InfoParagraph>
        <InfoHeader>Disclaimer</InfoHeader>
        <InfoParagraph>
        This tool cannot predict or estimate anyone’s legal costs. It is not customizable to your situation. It cannot factor in many of the variables that affect legal costs including the complexity of an issue, the choices that people make in their disputes or the specific legal rates, medical costs or other expenses that people agree to. In some cases, the tool uses the lowest typical costs in its calculation. Any individual may face higher legal fees or a longer process.
        </InfoParagraph>
        <InfoParagraph>
          Planning of your legal costs should be done explicitly with your legal service provider. The team behind this tool accepts no responsibility for reliance on these figures.
        </InfoParagraph>
        <br />


        <SiteFooter />
      </React.Fragment>
    );
  }
}
