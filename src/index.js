import _ from 'lodash';
import './scss/styles.scss';
import myName from './myName';
import Icon from './01.jpg';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = myName('khris');
    element.classList.add('hello');

      // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

  
    return element;
  }
  
  document.body.appendChild(component());