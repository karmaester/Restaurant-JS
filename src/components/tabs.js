import menu from './menu';
import home from './home';
import contact from './contact';

const tabs = () => `
<header class="l-header" id="header">
<nav class="nav">
<div class="tabsy">
<input type="radio" id="tab1" name="tab" checked>
<label class="tabButton" for="tab1">HOME</label>
<div class="tab">
    <div class="content">
        ${home()}
    </div>
</div>
<input type="radio" id="tab2" name="tab" checked>
<label class="tabButton" for="tab2">MENU</label>
<div class="tab">
    <div class="content">
        ${menu()}
    </div>
</div>
<input type="radio" id="tab3" name="tab" checked>
<label class="tabButton" for="tab3">CONTACT</label>
<div class="tab">
    <div class="content">
        ${contact()}
    </div>
</div>
</div>
</nav>
</header>`;

export default tabs;