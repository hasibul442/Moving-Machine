import React from "react";
import "./career.css";
function Career() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="career-bg pb-5">
        <h1 className="text-center page-title">Career</h1>
      </div>

      <div className="mt-3 pt-5">
        <div className="container">
            <div className="text-center">
                <p className="pt-5" style={{ fontStyle:"italic", fontSize:"18px" }}>"It doesn’t make sense to hire smart people and then tell<br/>them what to do; we hire smart people so they can tell us what to do."</p>
                <p style={{ fontWeight: "bold", fontSize:"20px" }}>– Steve Jobs</p>
            </div>
        </div>
      </div>

      <div className="mt-3 pt-5 pb-5">
        <div className="container">
            <h3 className="text-center">Currently No Opportunities Available.</h3>

            <p className="pt-5 text-center">Mail us your Resume at <b>info@mmlbd.com</b> Let's see what awaits!</p>
        </div>
      </div>
    </section>
  );
}

export default Career;
