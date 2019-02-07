Vue.component(
    'my-card', {
        props: ['item'],
        template: `
<div class="card">
    <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
    </div>
    <img class="w-100" :src="'images/' + item.prefix + '_icon.jpg'" alt="">
</div>`,
    }
);

Vue.component(
    'my-section', {
        props: ['item'],
        template: `
<div class="my-section">
    <h1 class="display-4">{{ item.title }}</h1>
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <p class="lead text-justify">{{ item.description }}</p>
        </div>
        <div class="col-lg-6 col-md-12 vh-100">
            <div :id="'carousel_' + item.prefix" class="carousel slide" data-ride="carousel">
                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                <div :class="'carousel-item' + (i == 1 ? ' active' : '')" v-for="i in 4" :key="i">
                    <img class="d-block w-100" :src="'images/' + item.prefix + i + '.jpg'" alt="">
                </div>
                </div>
                <a  class="carousel-control-prev" :href="'#carousel_' + item.prefix" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a  class="carousel-control-next" :href="'#carousel_' + item.prefix" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</div>
`,
        methods: {
            isMobile: function () {
                let check = false;
                (function (a) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
                })(navigator.userAgent || navigator.vendor || window.opera);
                return check;
            },
        }
    }
);

new Vue({
    el: '#app',
    data: {
        intro: 'Программирование - неотъемлемая часть современного мира.Его изучение актуально на сегодняшний день. С помощью программирования пишутся коды и создаются программы, новые технологии. В него входит информатика, математика и даже английский язык. Предлагаю Вам просмотреть список игр-тренажеров для изучения программирования. Найдите ту программу, с которой  Вам будет удобно и легко получать новые знания!',
        items: [
            {
                key: 0,
                prefix: 'lb',
                title: 'LightBot',
                description: 'Каждый мечтал управлять роботом. Новые технологии - наше будущее. Lightbot дает Вам эту возможность. В этой игре вы должны запрограммировать робота, чтобы тот прошел конкретную дистанцию и зажжег все свето-платформы. Игра довольно лёгкая и затягивающая. Lightbot  - самый увлекательный способ для детей  научиться основам программирования и понять его логику.',
            },
            {
                key: 1,
                prefix: 'scr',
                title: 'Scratch',
                description: 'Scratch является понятным и доступным языком программирования для всех людей. В этой  программе можете научиться созданием  наброска собственных анимированных и интерактивных историй, игр и других проектов. Необязательно иметь опыт в этих сферах, достаточно иметь мотивацию и время. Творите, публикуйте, играйте!',
            },
            {
                key: 2,
                prefix: 'cm',
                title: 'CodeMonkey',
                description: 'Занимательная видеоигра, где вы можете научиться без проблем основам программирования.  Решая интересные  головоломки, вы развиваете свое аналитическое мышление и приобретаете важный опыт для решения такого рода задач. Все просто: написать код, поймать бананы, спасти мир. Вы сможете сделать самостоятельно приложения и проверить свои способности. Всегда — учиться, все — знать! Удачи в познании новом!',
            },
            {
                key: 3,
                prefix: 'cco',
                title: 'CodeCombat',
                description: 'CodeCombat – это платформа для обучения нескольких языков программирования в игровой форме. Начиная работу в CodeCombat, Вы попадаете в магический мир и приобретаете способность колдовать, создавая код программы. С прохождением уровня Ваш персонаж будет получать необходимые вещи. При этом, чем качественней выполнена задача, тем лучше награда в конце. Собирайте самоцветы, побеждайте в схватках с врагами и станьте лучшим магом в программировании!',
            },
            {
                key: 4,
                prefix: 'sp',
                title: 'Swift Playgrounds',
                description: 'Swift Playgrounds – уникальное познавательное приложение от компании Apple. Ваша задача состоит в том, что  нужно запрограммировать существо на сбор кристаллов на языке программирования Swift или решить головоломку. Вы можете создать даже свою карту и пройти ее. Желаем Вам  в полном объеме насладиться результатом!',
            },
            {
                key: 5,
                prefix: 'f',
                title: 'Factorio',
                description: 'В этой увлекательной игре вы, космонавт, потерпели крушение и пытаетесь выжить на невиданной  планете, имеющей богатую фауну и флору. Основная цель игры - построить ракету и отправиться домой. Вы можете создавать разные конструкции для строительства, находить всевозможные ресурсы, управлять заводами, однако Вам будет мешать сама природа. Будьте внимательны, просчитывайте стратегию, и вы обязательно пройдете игру!',
            },
            {
                key: 6,
                prefix: 'hrm',
                title: 'Human Resource Machine',
                description: 'Хотели ли Вы когда-нибудь взять контроль над группой офисных работников? Если да, то Human Resource Machine предоставит Вам эту возможность. Human Resource – это необычная и красочная игра в жанре инди – головоломки. Ничего сложного: решить задачу и перейти на новый уровень. Для этого вам нужно запрограммировать Ваших сотрудников на решение головоломки. Не бойтесь затруднений, в этой игре все сделано так, что разберется любой. Будьте хорошим руководителем и спасите свою работу, ведь машины грядут... чтобы лишить Вас имущества!',
            },
            {
                key: 7,
                prefix: 'mine',
                title: 'Minecraft',
                description: 'Minecraft - компьютерная игра в жанре выживания в открытом море, в котором много опасностей. Книга Крэйга Ричардсона «Программируй с Minecraft» поможет Вам Научиться и узнать больше о языке программирования Python с помощью погружения в игру Minecraft. Вас ждет приключение и время проведения, полного веселья. Программируете, играйте и наслаждайтесь своим творением!',
            },
            {
                key: 8,
                prefix: 'sh',
                title: 'SHENZHEN I/O',
                description: 'В такой замечательной и развивающей игре как SHENZHEN/IO вы можете побывать на месте рабочего в сфере программирования, работая на крупнейшую китайскую компанию по производству электроники. В вашем распоряжении все, что нужно для профессионального программиста. Вы будете решать интересные головоломки и продвигаться дальше. Основное решение задач  будет опираться на несложном, мощном языке ассемблера. Программируйте, начиная от плат, заканчивая ЖК-экранами. Вы всегда можете прочитать пособие, которое предоставляет Вам игра. Проявите творческий подход! \n',
            },
            {
                key: 9,
                prefix: 'hoc',
                title: 'Hour of Code',
                description: 'Hour of code предназначен для обучения программированию и информатики. Если Вы начнете работу в этом приложении, то приобретете много полезного в данных сферах. Вы можете учиться программировать, как и с тематикой "Star Wars", а может и "Minecraft", так и по теме мультфильма "Холодное Сердце".',
            },
        ]
    }
});

$('.carousel').bcSwipe({threshold: 50});