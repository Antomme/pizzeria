import { useNavigate } from "react-router-dom";
/**
 * Renders the global footer component.
 *
 * This component is intended to be displayed at the bottom
 * of every page in the application. It contains static
 * navigation links such as "Über uns", "Impressum", and "Kontakt".
 *
 * @returns {JSX.Element} The footer section with navigation links.
 */

export function Footer() {

    const navigate = useNavigate();

    return (<footer className="footer">
        <a onClick={() => navigate("/about")}>Über uns</a>
        <a onClick={() => navigate("/impressum")}>Impressum</a>
        <a onClick={() => navigate("/kontakt")}>Kontakt</a>
    </footer>);
}