import { Link } from "react-router-dom";
import ListItem from "./ListItem.component";

const Navbar = () => {
  return <div>{nav2()}</div>;
};

export default Navbar;

// const nav1 = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <nav className="nav justify-content-center navbar-light">
//           <Link className="nav-link active" to={"#"}>
//             Active link
//           </Link>
//           <Link className="nav-link" to={"#"}>
//             Link
//           </Link>
//           <Link className="nav-link disabled" to={"#"}>
//             Disabled link
//           </Link>
//         </nav>
//       </BrowserRouter>
//     </div>
//   );
// };
const nav2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"#"}>
            THE BAND
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Links />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const Links = ({ css = "" }: any) => {
  return (
    <>
      <ListItem css={css} to="home" text="Home" />
      <ListItem css={css} to="aboutus" text="About US" />
      <ListItem css={css} to="tour" text=" Our Tours" />
      <ListItem css={css} to="buy" text="Our Stuff" />
    </>
  );
};
