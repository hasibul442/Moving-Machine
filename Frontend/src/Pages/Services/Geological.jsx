import React from "react";

function Geological() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="geological-bg">
        <h1 className="text-center page-title">E&P Services</h1>
      </div>

      <div className="mt-5 mb-5">
        <div className="container">
          <div className="px-5 geological_service_text">
            <p>
            With a long-term objective of becoming a major player in oil and gas industry thus energy sector of Bangladesh, Moving Machines has built a team of seasoned industry professionals to assist large international operators in consultancy, survey and drilling for on-shore and off-shore oil and gas exploration as well as production. With extensive local experience of the members of the team, we can assist in following ways but not limited to:
            </p>
            <ul>
              <li>
              Adding value to consultants’ works standing on a thorough knowledge of identified and prospective gas fields in Bangladesh.
              </li>
              <li>
              Designing and conducting geological surveys, seismic surveys and interpretations, selection and preparation of drilling sites, negotiation with various service contractors and awarding sub-contracts.
              </li>
              <li>
              Production of different types of geological cross sections, maps, etc.
              </li>
              <li>
              Generation of geological reports like prospect evaluation, well proposal and well completion as well as formulation of exploration and drilling budget.
              </li>
              <li>
              Negotiating with government agencies in oil and gas purchase and sale agreement
              </li>
            </ul>
            <p>
            In performing its assignments, our team particularly wants to mention its close rapport with industry experts and with decision makers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Geological;
