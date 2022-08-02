import { TitlePage } from "../components/TitlePage.component";

const About = () => {
  return (
    <div className="container mb-2">
      <TitlePage title={"About US"} />

      <div className="row mt-3">
        <div className="col-12 col-md">
          <p className="lead">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
          </div>
          <div className="col-6 col-md-6 ">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">2010</p>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
