import "./footer.css";
import {BiLogoGithub} from 'react-icons/bi'

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-content">
        <div id="contributors">
          <h3>Contributors</h3>
          <ul>
            <li><a href="https://github.com/Elliotthkj">Elliott J</a></li>
            <li><a href="https://github.com/JaxsonMontanaro">Jaxson M</a></li>
            <li><a href="https://github.com/DanielRendon1020">Daniel R</a></li>
            <li><a href="https://github.com/rhanico">Franz R</a></li>
            <li><a href="https://github.com/chrisw7128">Christopher W</a></li>
          </ul>
        </div>
        <div id="links">
            <h3><a href="https://github.com/DanielRendon1020/PERN-Project">
                <BiLogoGithub />
            </a></h3>
        </div>
      </div>
    </div>
  );
}
