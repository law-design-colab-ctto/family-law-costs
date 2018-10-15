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
          This tool was developed by CALIBRATE and UVIC’s Access to Justice Centre of Excellence. It was funded by the Law Foundation of Ontario. These organizations are committed to advancing access to justice in Canada. They are not advocacy groups or promoting any particular reform or approach to family law. They worked together to help provide one more piece of the picture to better understand family law.
        </InfoParagraph>

  <InfoHeader>Law & Design CoLab</InfoHeader>
        <InfoParagraph>
          This website was designed and built by the <a href="lawdesigncolab.ca">Law & Design CoLab</a> in collaboration with Calibrate Solutions.
        </InfoParagraph>

        <InfoParagraph>
          The Law & Design CoLab is a team of volunteers that works to bring more design thinking and cross-sector collaboration to Ontario’s justice sector. We conceive, scope, and run projects in partnership with organizations working to improve access to justice. Our projects emphasize iterative design, user testing, and an open work process. We meet weekly at <a href="civictech.ca">Civic Tech Toronto</a> and at the <a href="socialinnovation.org">Centre for Social Innovation</a>.
        </InfoParagraph>


        <InfoParagraph>
          We’re always looking for volunteers and collaborators – whether you’d like to propose a project or if you’re interested in learning more about us, let’s chat!
        </InfoParagraph>

        <InfoParagraph>
          <i>Out-of-Pocket Credits:</i>
        </InfoParagraph>

        <InfoParagraph>
            Thank you to our amazing team of volunteers who developed the project: <b>Sam Horodezky</b> and <b>Veronica Wojnas</b> (UX concept and design); <b>Ariana Cuvin</b> and <b>Francesca Oprandi</b> (visual design and illustrations); <b>Sheau Lih Vong</b> (persona design and narratives); <b>Michael Macrae</b> (supporting legal research); <b>Sarah Boo</b> (website design and coding lead); <b>Nick Yang</b> and <b>Eric Babak</b> (coding team); <b>Avery Au</b> and <b>Mari Zhou</b> (project leads).
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
