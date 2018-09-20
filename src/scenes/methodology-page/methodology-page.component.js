import React, { Component } from "react";
import { SiteHeader, SiteFooter } from "src/components";

export default class InfoPage extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteHeader />
        <h1>Calculation Methodologies</h1>
        <p>
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
        </p>
        <p>
          <strong>Legal Costs</strong> combine lawyers’ fees adjusted by legal
          aid eligibility, court fees, and the expense of other professionals
          such as tax advisors, child psychologists, parenting coaches and
          accountants.
        </p>
        <p>
          Lawyers Fees are calculated at an hourly rate of $315/hour, the hourly
          average for Canadian family lawyers with 2-11 years of experience,
          based on the Canadian Lawyers Magazine 2018 annual fees survey.
        </p>
        <p>
          At each stage of the process, the number of hours of legal services
          used to calculate the legal fees is based on the number of hours that
          Legal Aid Ontario approves for these stages of the process. Where the
          persona would be dealing with more than one area of family law, the
          number of hours for each part of the process were added together. We
          recognize that legal aid coverage varies from province to province and
          that legal aid hours allotment are considered low. Most cases require
          more than the allotted hours. Lawyers working on a legal aid
          certificate often do additional work that is uncompensated. Therefore,
          the legal fees generated in this calculation are on the low end. Hours
          per legal stage Application: 12 hours Variation 7.5 Access / Support
          order relating to children – 24 hours (access / support) Divorce with
          no dependent children 12 Divorce with dependent children 34 Trial
          (application + access / support order + two day trial= 82 hours
        </p>
        <p>
          Legal Aid If the persona would be eligible for legal aid in the
          province or territory, the lawyers’ fees are removed from the
          calculation based on the legal aid rates published May 2018. There is
          no variation for partial payment of legal fees for people above the
          legal aid eligibility, but within the income threshold that allows for
          fee reductions.
        </p>
        <p>
          Court Fees are based on the published court fees in each jurisdiction
          for each stage of the process, retrieved May 2018.
        </p>
        <p>
          Professional Fees are the child assessments or psychologists and
          financial advisors hired in the preparation for court processes. The
          amount is based on the national average.
        </p>
        <p>
          Mediation Fees are calculated based on the average rate of mediation
          fees charged by family lawyers to their clients as a disbursement,
          plus the court fees to file the application, two days of lawyers’ fees
          and the professional fees appropriate to the stage of the process.
        </p>
        <p>
          Court events is the number of courthouse appearances or tasks that
          require in-person attendance at the courthouse, based on a Justice
          Canada report . The number of required appearances is reduced if the
          persona income is increased in recognition that lawyers can manage
          some of these events without the person attending the courthouse.
        </p>
        <p>
          Preparation days is based on the number of days of reviewing or
          preparation documents, meeting with lawyers, organization files and
          preparing for stages of the court process. The number of days is based
          on input from self-represented litigants who described the amount of
          time they sent at different stages of the process, combined with input
          from family lawyers about the scope of preparation that their clients
          have to do. The number of preparation days is reduced if the persona
          income is increased in recognition that lawyers can manage some of
          these events without the person attending the courthouse.
        </p>
        <p>
          Lost income is calculated if the persona is employed, or reduced if
          there are employed part time. It is based on the number of days of
          work someone would lose to go to the courthouse where required and to
          prepare for each stage, whether on their own or with their lawyer. It
          also includes the number of days that self-represented litigants
          reported having to call in sick or use vacation days to recover from
          the stress or illness caused by the process. This amount of days is
          then multiplied by the daily amount that someone would make at any
          income level. The of lost income is reduced if the persona income is
          in the upper third of the income range, recognizing that lawyers
          manage some of these events without the person attending the
          courthouse, when people can afford those services.
        </p>
        <p>
          Child care costs are calculated by multiplying the number of days for
          which child care is required, multiplied by the number of children,
          multiplied by the average cost of childcare in each province or
          territory. The number of days required is a combination of the number
          of courthouse appearances plus the number of preparation days required
          to prepare materials, meet with the lawyer or review materials.
        </p>
        <p>
          Transportation costs are calculated based on the distance someone
          lives from the courthouse. A average transportation cost is applied to
          each distance range and then multiplied by the number of times the
          person needs to attend at the courthouse.
        </p>
        <p>
          Moving costs apply when someone’s legal matter also requires moving,
          usually out of a shared home. The costs is the average cost of hiring
          a moving service plus the cost of an extra month of rent / deposit,
          required to secure a new apartment. This amount is based on the
          published averages in the major cities in each jurisdiction.
        </p>
        <p>
          The Impact on Stability shows the impact of court processes on other
          areas of people’s lives. Depending on someone’s income level, they may
          not pay more for this stage, but it may have a different impact,
          increasing their instability and decreasing their wellbeing. This
          calculation is based on a combination of: The risk of bankruptcy when
          low and middle income people pay for legal processes through loans or
          credit cards The level of flexibility people have to attend meetings
          or court without risking their jobs The level of job security they
          have The extent to which they pay for prescriptions, medical
          treatments or health costs The impact of the legal process on their
          well-being, sleeping patterns, substance abuse, and relationships.
          Each of these risks is factored in to assess the Impact on Stability
          based on the circumstances of the persona. That risk factor changes as
          their income changes, recognizing that some of these risks are easier
          to manage when someone has greater savings, extended health coverage
          or job protection.
        </p>
        <SiteFooter />
      </React.Fragment>
    );
  }
}
