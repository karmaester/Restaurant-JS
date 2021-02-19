import menu01 from './img/01.png';
import menu02 from './img/02.png';
import menu03 from './img/03.png';
import menu04 from './img/04.png';
import menu05 from './img/05.png';
import menu06 from './img/06.png';

const menu = () => `<section class="menu section bd-container" id="menu">
    <h2 class="section-title">Pick today's pleasure</h2>

    <div class="menu__container bd-grid">
        <div class="menu__content">
            <img src="${menu01}" alt="" class="menu__img">
            <h3 class="menu__name">Mix salad</h3>
            <span class="menu__detail">Healthy and tasty</span>
            <span class="menu__preci">$12.00</span>
            <a href="#" class="button menu__button"><i class="fas fa-cart-plus"></i></a>
        </div>

        <div class="menu__content">
            <img src="${menu02}" alt="" class="menu__img">
            <h3 class="menu__name">Salty waffle</h3>
            <span class="menu__detail">Delicious as hell</span>
            <span class="menu__preci">$14.00</span>
            <a href="#" class="button menu__button"><i class='fas fa-cart-plus'></i></a>
        </div>
        
        <div class="menu__content">
            <img src="${menu03}" alt="" class="menu__img">
            <h3 class="menu__name">Cheese rolls</h3>
            <span class="menu__detail">You cant have just one</span>
            <span class="menu__preci">$9.50</span>
            <a href="#" class="button menu__button"><i class='fas fa-cart-plus'></i></a>
        </div>

        <div class="menu__content">
        <img src="${menu04}" alt="" class="menu__img">
        <h3 class="menu__name">Venezuelan tequeños</h3>
        <span class="menu__detail">Something to never forget</span>
        <span class="menu__preci">$12.00</span>
        <a href="#" class="button menu__button"><i class='fas fa-cart-plus'></i></a>
    </div>

    <div class="menu__content">
        <img src="${menu05}" alt="" class="menu__img">
        <h3 class="menu__name">Cheese bread</h3>
        <span class="menu__detail">So addictive it should be illegal</span>
        <span class="menu__preci">$12.00</span>
        <a href="#" class="button menu__button"><i class='fas fa-cart-plus'></i></a>
    </div>
    
    <div class="menu__content">
        <img src="${menu06}" alt="" class="menu__img">
        <h3 class="menu__name">Peruvian ceviche</h3>
        <span class="menu__detail">All you've been waiting for</span>
        <span class="menu__preci">$17.50</span>
        <a href="#" class="button menu__button"><i class='fas fa-cart-plus'></i></a>
    </div>
    </div>
</section>`;

export default menu;
