Vue.component(
    'my-carousel', {
        props: ['title'],
        template: `<div :id="'carousel_' + title" class="carousel slide" data-ride="carousel">
                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" :src="'images/' + title + '_icon.jpg'" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" :src="'images/' + title + '1.jpg'" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" :src="'images/' + title + '2.jpg'" alt="">
                                </div>
                            </div>
                            <a class="carousel-control-prev" :href="'#carousel_' + title" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" :href="'#carousel_' + title" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                       </div>`,
    }
);

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        titles: [
            'lb',
            'scr',
            'cm',
            'cc',
            'sp',
            'f',
            'hr',
            'mine',
            'sh',
            'hrm',
        ]
    }
});

//$('.carousel').bcSwipe({ threshold: 50 });