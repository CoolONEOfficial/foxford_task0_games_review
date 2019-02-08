Vue.component(
    'my-card', {
        props: ['item'],
        template: `
<div class="card">
    <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
    </div>
    <img class="w-100" :src="'images/' + item.prefix + '_icon.png'" alt="">
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
                <a v-show="!isMobile" class="carousel-control-prev" :href="'#carousel_' + item.prefix" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a v-show="!isMobile" class="carousel-control-next" :href="'#carousel_' + item.prefix" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col text-center mt-3"
        v-for="(list, key) in Array.from(item.platforms)"
        :key="key">
            <a :href="list[1]">
                <img :src="list[0]" alt="">
            </a>
        </div>
    </div>
</div>
`,
        methods: {
            isMobile: function () {
                var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
                var mq = function (query) {
                    return window.matchMedia(query).matches;
                }

                if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                    return true;
                }

                // include the 'heartz' as a way to have a non matching MQ to help terminate the join
                // https://git.io/vznFH
                var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
                return mq(query);
            },
        }
    }
);

let platformsEnum = Object.freeze({
    "android": "https://img.icons8.com/windows/64/000000/android-os.png",
    "ios": "https://img.icons8.com/windows/64/000000/apple-app-store.png",
    "macos": "https://img.icons8.com/windows/64/000000/mac-os.png",
    "ubuntu": "https://img.icons8.com/windows/64/000000/ubuntu.png",
    "linux": "https://img.icons8.com/windows/64/000000/linux.png",
    "windows": "https://img.icons8.com/windows/64/000000/windows-10.png",
    "playstation": "https://img.icons8.com/windows/64/000000/playstation.png",
    "xbox": "https://img.icons8.com/windows/64/000000/xbox.png",
    "n-switch": "https://img.icons8.com/windows/64/000000/nintendo.png",
    "web": "https://img.icons8.com/windows/64/000000/internet.png",
});

new Vue({
    el: '#app',
    data: {
        platformsEnum: platformsEnum,
        intro: 'Программирование - неотъемлемая часть современного мира.Его изучение актуально на сегодняшний день. С помощью программирования пишутся коды и создаются программы, новые технологии. В него входит информатика, математика и даже английский язык. Предлагаю Вам просмотреть список игр-тренажеров для изучения программирования. Найдите ту программу, с которой  Вам будет удобно и легко получать новые знания!',
        items: [
            {
                key: 0,
                prefix: 'lb',
                title: 'LightBot',
                description: 'Каждый мечтал управлять роботом. Новые технологии - наше будущее. Lightbot дает Вам эту возможность. В этой игре вы должны запрограммировать робота, чтобы тот прошел конкретную дистанцию и зажжег все свето-платформы. Игра довольно лёгкая и затягивающая. Lightbot  - самый увлекательный способ для детей  научиться основам программирования и понять его логику.',
                platforms: new Map(
                    [
                        [platformsEnum.android, "http://lightbot.com/redirect-android.html"],
                        [platformsEnum.ios, "http://lightbot.com/redirect-ios.html"],
                        [platformsEnum.windows, "http://lightbot.com/redirect-android.html"],
                        [platformsEnum.web, "http://lightbot.com/"],
                    ]
                ),
            },
            {
                key: 1,
                prefix: 'scr',
                title: 'Scratch',
                description: 'Scratch является понятным и доступным языком программирования для всех людей. В этой  программе можете научиться созданием  наброска собственных анимированных и интерактивных историй, игр и других проектов. Необязательно иметь опыт в этих сферах, достаточно иметь мотивацию и время. Творите, публикуйте, играйте!',
                platforms: new Map(
                    [
                        [platformsEnum.android, "https://play.google.com/store/apps/details?id=org.scratchjr.android"],
                        [platformsEnum.ios, "https://itunes.apple.com/ru/app/scratchjr/id895485086?mt=8"],
                        [platformsEnum.windows, "https://downloads.scratch.mit.edu/desktop/Scratch%20Desktop%20Setup%201.2.1.exe"],
                        [platformsEnum.macos, "https://downloads.scratch.mit.edu/desktop/Scratch%20Desktop-1.2.1.dmg"],
                        [platformsEnum.ubuntu, "http://ubuntu.media.mit.edu/ubuntu//pool/universe/s/scratch/scratch_1.4.0.6~dfsg1-5~ubuntu12.04.1_all.deb"],
                        [platformsEnum.web, "https://scratch.mit.edu/"],
                    ]
                ),
            },
            {
                key: 2,
                prefix: 'cm',
                title: 'CodeMonkey',
                description: 'Занимательная видеоигра, где вы можете научиться без проблем основам программирования.  Решая интересные  головоломки, вы развиваете свое аналитическое мышление и приобретаете важный опыт для решения такого рода задач. Все просто: написать код, поймать бананы, спасти мир. Вы сможете сделать самостоятельно приложения и проверить свои способности. Всегда — учиться, все — знать! Удачи в познании новом!',
                platforms: new Map(
                    [
                        [platformsEnum.windows, "https://www.microsoft.com/ru-ru/p/codemonkey/9nj6xdlhcn7f"],
                        [platformsEnum.web, "https://www.playcodemonkey.com/"],
                    ]
                ),
            },
            {
                key: 3,
                prefix: 'cco',
                title: 'CodeCombat',
                description: 'CodeCombat – это платформа для обучения нескольких языков программирования в игровой форме. Начиная работу в CodeCombat, Вы попадаете в магический мир и приобретаете способность колдовать, создавая код программы. С прохождением уровня Ваш персонаж будет получать необходимые вещи. При этом, чем качественней выполнена задача, тем лучше награда в конце. Собирайте самоцветы, побеждайте в схватках с врагами и станьте лучшим магом в программировании!',
                platforms: new Map(
                    [
                        [platformsEnum.web, "https://codecombat.com/"],
                    ]
                ),
            },
            {
                key: 4,
                prefix: 'sp',
                title: 'Swift Playgrounds',
                description: 'Swift Playgrounds – уникальное познавательное приложение от компании Apple. Ваша задача состоит в том, что  нужно запрограммировать существо на сбор кристаллов на языке программирования Swift или решить головоломку. Вы можете создать даже свою карту и пройти ее. Желаем Вам  в полном объеме насладиться результатом!',
                platforms: new Map(
                    [
                        [platformsEnum.web, "https://www.apple.com/swift/playgrounds/"],
                        [platformsEnum.macos, "https://itunes.apple.com/us/app/swift-playgrounds/id908519492?mt=8"],
                    ]
                ),
            },
            {
                key: 5,
                prefix: 'f',
                title: 'Factorio',
                description: 'В этой увлекательной игре вы, космонавт, потерпели крушение и пытаетесь выжить на невиданной  планете, имеющей богатую фауну и флору. Основная цель игры - построить ракету и отправиться домой. Вы можете создавать разные конструкции для строительства, находить всевозможные ресурсы, управлять заводами, однако Вам будет мешать сама природа. Будьте внимательны, просчитывайте стратегию, и вы обязательно пройдете игру!',
                platforms: new Map(
                    [
                        [platformsEnum.windows, "https://store.steampowered.com/app/427520/Factorio/"],
                        [platformsEnum.web, "https://www.factorio.com/"],
                    ]
                ),
            },
            {
                key: 6,
                prefix: 'hrm',
                title: 'Human Resource Machine',
                description: 'Хотели ли Вы когда-нибудь взять контроль над группой офисных работников? Если да, то Human Resource Machine предоставит Вам эту возможность. Human Resource – это необычная и красочная игра в жанре инди – головоломки. Ничего сложного: решить задачу и перейти на новый уровень. Для этого вам нужно запрограммировать Ваших сотрудников на решение головоломки. Не бойтесь затруднений, в этой игре все сделано так, что разберется любой. Будьте хорошим руководителем и спасите свою работу, ведь машины грядут... чтобы лишить Вас имущества!',
                platforms: new Map(
                    [
                        [platformsEnum.windows, "https://store.steampowered.com/app/375820/Human_Resource_Machine/"],
                    ]
                ),
            },
            {
                key: 7,
                prefix: 'mine',
                title: 'Minecraft',
                description: 'Minecraft - компьютерная игра в жанре выживания в открытом море, в котором много опасностей. Книга Крэйга Ричардсона «Программируй с Minecraft» поможет Вам Научиться и узнать больше о языке программирования Python с помощью погружения в игру Minecraft. Вас ждет приключение и время проведения, полного веселья. Программируете, играйте и наслаждайтесь своим творением!',
                platforms: new Map(
                    [
                        [platformsEnum.web, "https://www.litres.ru/kreyg-richardson/programmiruem-s-minecraft-sozday-svoy-mir-s-pomoschu-python-25455725/"],
                    ]
                ),
            },
            {
                key: 8,
                prefix: 'sh',
                title: 'SHENZHEN I/O',
                description: 'В такой замечательной и развивающей игре как SHENZHEN/IO вы можете побывать на месте рабочего в сфере программирования, работая на крупнейшую китайскую компанию по производству электроники. В вашем распоряжении все, что нужно для профессионального программиста. Вы будете решать интересные головоломки и продвигаться дальше. Основное решение задач  будет опираться на несложном, мощном языке ассемблера. Программируйте, начиная от плат, заканчивая ЖК-экранами. Вы всегда можете прочитать пособие, которое предоставляет Вам игра. Проявите творческий подход! \n',
                platforms: new Map(
                    [
                        [platformsEnum.windows, "https://store.steampowered.com/app/504210/SHENZHEN_IO/"],
                        [platformsEnum.linux, "https://store.steampowered.com/app/504210/SHENZHEN_IO/"],
                        [platformsEnum.macos, "https://store.steampowered.com/app/504210/SHENZHEN_IO/"],
                    ]
                ),
            },
            {
                key: 9,
                prefix: 'hoc',
                title: 'Hour of Code',
                description: 'Hour of code предназначен для обучения программированию и информатики. Если Вы начнете работу в этом приложении, то приобретете много полезного в данных сферах. Вы можете учиться программировать, как и с тематикой "Star Wars", а может и "Minecraft", так и по теме мультфильма "Холодное Сердце".',
                platforms: new Map(
                    [
                        [platformsEnum.web, "https://code.org/learn"],
                    ]
                ),
            },
        ]
    }
});

$('.carousel').bcSwipe({threshold: 50});