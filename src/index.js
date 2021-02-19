import './scss/styles.scss';
import tabs from './components/tabs';
import 'boxicons';

function component() {
  const element = document.querySelector('#content');

  element.innerHTML = tabs();
  return element;
}

component();