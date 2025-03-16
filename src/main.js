import {button} from "./components/button/button";
import './normalize.scss';

const root = document.getElementById('root');

const main = () => {
  root.append(button({ inner: 'text' }));
};

main();
