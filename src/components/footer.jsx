import "./footer.css";
import {BiLogoGithub} from 'react-icons/bi'

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-content">
        <div id="contributors">
          <h3>Contributors</h3>
          <ul>
            <li><a href="https://github.com/Elliotthkj" target="_blank">Elliott J</a></li>
            <li><a href="https://github.com/JaxsonMontanaro" target="_blank">Jaxson M</a></li>
            <li><a href="https://github.com/DanielRendon1020" target="_blank">Daniel R</a></li>
            <li><a href="https://github.com/rhanico" target="_blank">Franz R</a></li>
            <li><a href="https://github.com/chrisw7128" target="_blank">Christopher W</a></li>
          </ul>
        </div>
        <div id="links">
            <h3><a href="https://github.com/DanielRendon1020/PERN-Project" target="_blank">
                <BiLogoGithub />
            </a></h3>
        </div>
      </div>
    </div>
  );
}
