import _ from 'lodash';
import './scss/styles.scss';
import tabs from './components/tabs';
import Icon from './01.jpg';
import 'boxicons';

function component() {
    const element = document.querySelector('#content');
  
    element.innerHTML = tabs();
    element.classList.add('hello');

      // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

  
    return element;
  }
  
component();