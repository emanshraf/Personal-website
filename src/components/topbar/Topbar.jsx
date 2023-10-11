import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            EMAN ASHRAF
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a  href="tel:01093791858">
              <span className="link">01090793007</span>
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:emanashraf19951992@gmail.com">
            <span className="link">emanashraf19951992@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
