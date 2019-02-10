Vue.component(
    'my-card', {
        props: ['item'],
        template: `
<a :href="'#section-' + item.prefix" class="custom-card">
    <div class="card">
        <div class="card-body">
            <p class="lead card-title" style="text-decoration:none;">{{ item.title }}</p>
        </div>
        <img class="w-100" :src="'images/' + item.prefix + '_icon.png'" alt="">
    </div>
</a>
`,
    }
);

Vue.component(
    'my-section', {
        props: ['item'],
        template: `
<div :class="'my-section'" :id="'section-' + item.prefix" :style="contentH != null ? { height: contentH + 'px' } : {}">   
    <div :id="'carousel-' + item.prefix" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
            <li v-for="i in 4"
            :key="i - 1"
            :data-target="'#carousel-' + item.prefix" 
            :data-slide-to="i - 1" 
            :class="i == 1 ? 'active' : ''"></li>
        </ul>

        <div class="carousel-inner">
            <div :class="'carousel-item' + (i == 1 ? ' active' : '')" v-for="i in 4" :key="i">
                <div class="imgOverlay"
                :style="'background: linear-gradient(to bottom, ' + (item.key > 0 ? '#000000 0%, ' : '' ) + '#00000088 10%, #00000088 90%, #000000);'"></div>
                <img class="d-block" :style="contentH != null ? { height: contentH + 'px' } : {}" :src="'images/' + item.prefix + i + '.jpg'" alt="">
            </div>
        </div>

        <a class="carousel-control-prev" :href="'#carousel-' + item.prefix" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
        </a>
        <a class="carousel-control-next" :href="'#carousel-' + item.prefix" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
        </a>

        <div class="main-text">
            <div class="container" :ref="'carousel-content-' + item.prefix">
                <h1 class="display-4">{{ item.title }}</h1> 
                <p class="lead text-justify mb-3">{{ item.description }}</p>
                <div class="row mb-3">
                    <div class="col-lg-6 col-md-12">
                        <h1 class="display-4">Плюсы</h1>
                        <ul class="list-group">
                          <li class="list-group-item"
                                v-for="pro in item.pros">{{ pro }}</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <h1 class="display-4">Минусы</h1> 
                        <ul class="list-group">
                          <li class="list-group-item"
                                v-for="con in item.cons">{{ con }}</li>
                        </ul>
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
        </div>
    </div>
</div>
`,
        data: function () {
            return {
                contentH: null,
            };
        },
        mounted: function () {
            this.updateContentSize();
            window.addEventListener('resize', this.updateContentSize);
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.updateContentSize)
        },
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
            bootstrapEnv: function () {
                let envs = ['xs', 'sm', 'md', 'lg', 'xl'];

                let el = document.createElement('div');
                document.body.appendChild(el);

                envs.shift();
                let curEnv = 0;

                for (let [index, env] of envs.reverse().entries()) {
                    el.classList.add(`d-${env}-none`);

                    if (window.getComputedStyle(el).display === 'none') {
                        curEnv = index;
                        break;
                    }
                }

                document.body.removeChild(el);
                return curEnv;
            },
            updateContentSize: function (event) {
                console.log(this.$refs);

                const origH = this.$refs['carousel-content-' + this.item.prefix].clientHeight + 280;
                console.log("content h: " + origH);
                const windowH = $(window).height() - 40;
                console.log("w h: " + windowH);

                this.contentH = Math.max(origH, windowH);
                console.log(this.contentH);
            }
        },
    }
);

const url = "https://img.icons8.com/windows/64/ffffff/";

let platformsEnum = Object.freeze({
    "android": url + "android-os.png",
    "ios": url + "apple-app-store.png",
    "macos": url + "mac-os.png",
    "ubuntu": url + "ubuntu.png",
    "linux": url + "linux.png",
    "windows": url + "windows-10.png",
    "playstation": url + "playstation.png",
    "xbox": url + "xbox.png",
    "web": url + "internet.png",
});

new Vue({
    el: '#app',
    data: {
        platformsEnum: platformsEnum,
        title: 'Топ 10 игр-тренажеров программирования для детей и родителей',
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
                pros: [
                    "Легкая и интересная подача основ программирования",
                    "Справится каждый, от самых маленьких до самых больших",
                    "В игре есть помощник, который понятно опишет каждую из функций",
                    "Бесплатное приложение на всех поддерживаемых платформах",
                ],
                cons: [
                    "В игре мало уровней, хотелось бы побольше.",
                    "Играя в браузере, не сохраняется прогресс игры.",
                ],
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
                pros: [
                    "Scratch есть пособия для родителей и учителей",
                    "Бесплатная программа для программирования на всех поддерживаемых платформах",
                    "Предоставление огромного количества возможностей для выражения творческих потенциалов",
                    "Есть возможность выкладывания своих работ, чтобы их могли видеть и оценивать",
                ],
                cons: [
                    "Сложно программировать на мобильных устройствах",
                    "Неполный перевод на русский язык",
                ],
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
                pros: [
                    "Эта игра находится на сайте, поэтому ей легко пользоваться",
                    "Codemonkey доступен на 18 языках",
                    "Вы можете стать учителем и преподавать уроки детям",
                    "При недопонимании есть возможность обратиться в техподдержку",
                    "Игра подходит для любого уровня знаний",
                    "Есть тестовый период на 30 дней",
                ],
                cons: [
                    "Codemonkey может наскучить, и захочется выполнять другие задачи."
                ],
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
                pros: [
                    "Обучение в игровой форме, что позволяет не утрачивать  интерес к обучению",
                    "Для изучения вам даются  языки Python и JavaScript",
                    "Спокойное звуковое сопровождение и поддержка русского языка",
                    "Есть тестовая версия"
                ],
                cons: [
                    "Могут встречаться ошибки (редко)",
                    "Цена подписки  - $3.99 в месяц или $39.99 навсегда (как для браузерной игры)",
                ],
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
                pros: [
                    "Получение навыков программирования Swift для новичков",
                    "Качественный и приятный дизайн игры",
                    "При затруднении, вы можете обратиться к  подсказкам и вспомогательным шаблонам",
                ],
                cons: [
                    "По сравнению с конкурентами, в Swift Playground мало функционала",
                    "Приложение поддерживает только устройства Apple",
                ],
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
                pros: [
                    "Оригинальное музыкальное сопровождение, плавные картинки, хорошая оптимизация игры, необычная графика",
                    "Создание собственных промышленных объектов",
                    "Развитие инженерно-технического мышления",
                    "Решение логических задач",
                    "Есть возможность приобрести демо-версию игры",
                ],
                cons: [
                    "Платная игра - 520 руб. (+170 руб. - дополнительный контент)",
                    "Новичкам поначалу трудно освоиться",
                    "Игра требует много времени",
                ],
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
                pros: [
                    "Веселое,  приятное звуковое сопровождение и красиво детализированные картинки",
                    "Развивает конструктивное мышление и даёт понятие о программировании",
                    "Поддерживает русский язык",
                ],
                cons: [
                    "Игра требует много времени",
                    "Могут быть ошибки в работе игры (редко)",
                ],
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
                pros: [
                    "Обучение языку python с помощью игры Minecraft",
                    "Подробные пояснения нюансов",
                    "Профессиональный перевод на русский язык",
                    "Книга полезна не только детям, но и взрослым",
                ],
                cons: [
                    "Стоимость (игры + книга) от 1900 руб.( за игру + 399 руб. )",
                    "Тяжело найти книгу в бумажном варианте",
                    "Электронная версия издана только в pdf формате",
                ],
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
                pros: [
                    "Спокойное звуковое сопровождение, оригинальный подход к жанру головоломка и хорошая оптимизация игры для всех платформ",
                    "Наличие пособия по игре и языку программирования ассемблера",
                    "Развитие навыков программирования и возможность познания нового о языке для любого уровня",
                    "Рост  сложности головоломок после каждой пройденной задачи",
                    "Доступная цена (349 руб.)",
                    "Возможен запуск в автономном режиме",
                ],
                cons: [
                    "Нет поддержки русского языка",
                    "Для решения некоторых головоломок потребуется уделить большое количество времени",
                ],
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
                pros: [
                    "Обучение в игровой форме, что позволяет усвоить легче информацию",
                    "Разнообразие тем для программирования",
                    "Есть видео - пособия",
                ],
                cons: [
                    "Неполный перевод на русский язык",
                ],
            },
        ]
    }
});