import { Link } from "react-router-dom";
interface IListItem {
  to: string;
  css: string;
  text: string;
}

const ListItem = ({ to, css, text }: IListItem) => {
  // const currentURL = window.location.pathname;
  return (
    <li className={"nav-item" + css}>
      <Link className="nav-link" aria-current="page" to={to}>
        {text}
      </Link>
    </li>
  );
};

export default ListItem;
