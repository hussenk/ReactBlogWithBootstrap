import { Links } from "./Navbar.component";

const Footer = () => {
  return (
    <div className="container">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-6 col-md">
            <p>Linkin Park</p>
            <small className="d-block mb-3 text-muted">© 1996-2022</small>
          </div>
          <div className="col-6 col-md">
            <h5>Visit</h5>
            <ul className="list-unstyled text-small">
              {<Links css={"text-muted"} />}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
