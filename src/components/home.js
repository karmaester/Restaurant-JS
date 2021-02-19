import picture from './img/home.png';

const home = () => `<main class="l-main">
            <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Porn food</h1>
                        <h2 class="home__subtitle">made with love for <br> your delight</h2>
                    </div>
                    
                    <img src="${picture}" alt="home image" class="home__img">
                </div>
            </section>
            </main>`;

export default home;