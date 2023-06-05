import { pageLinks } from "./data";
const PageLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {pageLinks.map((links) => {
        return (
          <li key={links.id}>
            <a href={links.href} className="nav-link">
              {links.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
