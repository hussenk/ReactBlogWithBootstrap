import { Link } from "react-router-dom";
interface IListItem {
  to: string;
  css: string;
  text: string;
}

const ListItem = ({ to, css, text }: IListItem) => {
  // const currentURL = window.location.pathname;
  if (css.length <= 0) {
    css = "nav-item";
  }
  return (
    <li className={css}>
      <Link className="nav-link" aria-current="page" to={to}>
        {text}
      </Link>
    </li>
  );
};

export default ListItem;
