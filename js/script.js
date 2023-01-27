/*
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
Bonus: Aggiungere un'immagine presa anch'essa da un data.
*/

var app = new Vue({
    el: '#app',
    data: {
        title: 'Lorem ipsum',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi, fugit iusto perspiciatis nobis hic inventore. Quo earum eveniet aliquid, libero deleniti modi assumenda, fugiat excepturi sequi, tempora placeat minima!',
        image: {
            url: './img/cat.jpg',
            alt: 'anime cat'
        },
        color: '255,255,255'
    },
    methods: {
        randomRgb() {
            let arr = [];
            for (let i = 0; i < 3; i++) {
                arr.push(Math.floor(Math.random() * 256));
            }
            this.color = arr.join(',');
        }
    }
});

Vue.config.devtools = true;