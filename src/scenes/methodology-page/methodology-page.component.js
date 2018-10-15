import React, { Component } from "react";
import { SiteHeader, SiteFooter } from "src/components";
import { InfoParagraph } from "../../components/info-paragraph/info-paragraph.component";
import { InfoHeader } from "../../components/info-header/info-header.component";
import { InfoSubheader } from "../../components/info-subheader/info-subheader.component";
import { InfoTable } from "../../components/info-table/info-table.component";
import { InfoTh } from "../../components/info-th/info-th.component";
import { InfoTr } from "../../components/info-tr/info-tr.component";
import { InfoTd } from "../../components/info-td/info-td.component";

export default class InfoPage extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteHeader />
        <InfoHeader>Calculation Methodologies</InfoHeader>
        <InfoParagraph>
          In preparing these calculations, research into the common expenses,
          average rates, and regional variations were collected to identify the
          court costs, child care and rent expenses in each province or
          territory. Information about each stage of the legal process and the
          average number of required visits to the courthouse is published by
          Justice Canada. Each of these sources was accessed in May of 2018. The
          range of out of pocket expenses and the amount of time required at
          each stage was shared with self-represented litigants through an
          online survey. People from across Canada validated the data,
          confirming or correcting the types of expenses and amount of time
          involved. A group of family lawyers also reviewed the calculations and
          persona stories and provided corrections or more detail where their
          clients typically face additional costs. The result is a set of
          calculations based on current data and validated user experiences
          presented through personas facing regular court processes and typical
          stresses and circumstances.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Legal Costs</strong> combine lawyers’ fees adjusted by legal
          aid eligibility, court fees, and the expense of other professionals
          such as tax advisors, child psychologists, parenting coaches and
          accountants.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Lawyers Fees</strong> are calculated at an hourly rate of
          $315/hour, the hourly average for Canadian family lawyers with 2-11
          years of experience, based on the Canadian Lawyers Magazine 2018
          annual fees survey.
        </InfoParagraph>
        <InfoParagraph>
          At each stage of the process, the number of hours of legal services
          used to calculate the legal fees is based on the number of hours that
          Legal Aid Ontario approves for these stages of the process. Where the
          persona would be dealing with more than one area of family law, the
          number of hours for each part of the process were added together. We
          recognize that legal aid coverage varies from province to province and
          that legal aid hours allotment are considered low. Most cases require
          more than the allotted hours. Lawyers working on a legal aid
          certificate often do additional work that is uncompensated. Therefore,
          the legal fees generated in this calculation are on the low end.
        </InfoParagraph>
        <InfoSubheader>Hours per legal stage</InfoSubheader>
        <InfoTable>
          <InfoTr>
            <InfoTh>Stage</InfoTh>
            <InfoTh>Hours</InfoTh>
          </InfoTr>
          <InfoTr>
            <InfoTd>Application</InfoTd>
            <InfoTd>12</InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd>Variation</InfoTd>
            <InfoTd>7.5 </InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd>Access / Support order relating to children</InfoTd>
            <InfoTd>
              24 <br /> (access / support)
            </InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd>Divorce with no dependent children</InfoTd>
            <InfoTd>12</InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd>Divorce with dependent children</InfoTd>
            <InfoTd>34</InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd>Trial</InfoTd>
            <InfoTd>
              82 <br />
              (application + access / support order + two day trial)
            </InfoTd>
          </InfoTr>
        </InfoTable>
        <InfoParagraph>
          <strong>Legal Aid</strong> If the persona would be eligible for legal
          aid in the province or territory, the lawyers’ fees are removed from
          the calculation based on the legal aid rates published May 2018. There
          is no variation for partial payment of legal fees for people above the
          legal aid eligibility, but within the income threshold that allows for
          fee reductions.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Court Fees</strong> are based on the published court fees in
          each jurisdiction for each stage of the process.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Professional Fees</strong> are the child assessments or
          psychologists and financial advisors hired in the preparation for
          court processes. The amount is based on the national average.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Mediation Fees</strong> are calculated based on the average
          rate of mediation fees charged by family lawyers to their clients as a
          disbursement, plus the court fees to file the application, two days of
          lawyers’ fees and the professional fees appropriate to the stage of
          the process.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Court events</strong> is the number of courthouse appearances
          or tasks that require in-person attendance at the courthouse, based on
          a Justice Canada report . The number of required appearances is
          reduced if the persona income is increased in recognition that lawyers
          can manage some of these events without the person attending the
          courthouse.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Preparation days</strong> is based on the number of days of
          reviewing or preparation documents, meeting with lawyers, organization
          files and preparing for stages of the court process. The number of
          days is based on input from self-represented litigants who described
          the amount of time they sent at different stages of the process,
          combined with input from family lawyers about the scope of preparation
          that their clients have to do. The number of preparation days is
          reduced if the persona income is increased in recognition that lawyers
          can manage some of these events without the person attending the
          courthouse.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Lost income</strong> is calculated if the persona is employed,
          or reduced if there are employed part time. It is based on the number
          of days of work someone would lose to go to the courthouse where
          required and to prepare for each stage, whether on their own or with
          their lawyer. It also includes the number of days that
          self-represented litigants reported having to call in sick or use
          vacation days to recover from the stress or illness caused by the
          process. This amount of days is then multiplied by the daily amount
          that someone would make at any income level. The of lost income is
          reduced if the persona income is in the upper third of the income
          range, recognizing that lawyers manage some of these events without
          the person attending the courthouse, when people can afford those
          services.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Child care costs</strong> are calculated by multiplying the
          number of days for which child care is required, multiplied by the
          number of children, multiplied by the average cost of childcare in
          each province or territory. The number of days required is a
          combination of the number of courthouse appearances plus the number of
          preparation days required to prepare materials, meet with the lawyer
          or review materials.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Transportation costs</strong> are calculated based on the
          distance someone lives from the courthouse. A average transportation
          cost is applied to each distance range and then multiplied by the
          number of times the person needs to attend at the courthouse.
        </InfoParagraph>
        <InfoParagraph>
          <strong>Moving costs</strong> apply when someone’s legal matter also
          requires moving, usually out of a shared home. The costs is the
          average cost of hiring a moving service plus the cost of an extra
          month of rent / deposit, required to secure a new apartment. This
          amount is based on the published averages in the major cities in each
          jurisdiction.
        </InfoParagraph>
        <InfoParagraph>
          The <strong>Impact on Stability</strong> shows the impact of court
          processes on other areas of people’s lives. Depending on someone’s
          income level, they may not pay more for this stage, but it may have a
          different impact, increasing their instability and decreasing their
          wellbeing. This calculation is based on a combination of: the risk of
          bankruptcy when low and middle income people pay for legal processes
          through loans or credit cards; the level of flexibility people have to
          attend meetings or court without risking their jobs; the level of job
          security they have; the extent to which they pay for prescriptions,
          medical treatments or health costs; and the impact of the legal process on
          their well-being, sleeping patterns, substance abuse, and
          relationships. Each of these risks is factored in to assess the Impact
          on Stability based on the circumstances of the persona. Some risk
          factors change with income, recognizing that some of these
          risks are easier to manage when someone has greater savings, extended
          health coverage or job protection.
        </InfoParagraph>
        <br />
        <SiteFooter />
      </React.Fragment>
    );
  }
}
