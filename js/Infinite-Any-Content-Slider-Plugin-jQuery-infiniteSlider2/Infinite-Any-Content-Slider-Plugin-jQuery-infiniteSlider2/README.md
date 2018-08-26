# infiniteSlider2.js — jQuery-плагин для создания слайдера

![no image](https://github.com/a-matsevich/infiniteSlider2/raw/master/gif/demo1.gif)

### Версия
2.0.4

### Demo
[CodePen](http://codepen.io/dobromil/pen/EZexVd)

### Особенности
* Работа с любым контентом
* Циклическое пролистывание
* Адаптивность
* Тонкая настройка

#### Использование
Подключите библиотеку jQuery и плагин infiniteSlider2.js в ваш проект.

```html
<head>
  <script src="/путь/к/jQuery.js"></script>
</head>
<body>
  <div id="infinite-slider2">
    <div>
      Контент для слайда №1
    </div>
    <div>
      Контент для слайда №2
    </div>
    <div>
      Контент для слайда №3
    </div>
    ...
  </div>
  ...
  <script src="/путь/к/infiniteSlider2.js"></script>
  <script src="/путь/к/вашему.js"></script>
</body>
```

#### Настройки
Вы можете изменять внешний вид и другие параметры слайдера по своему желанию при инициализации плагина в вашем.js.
По умолчанию infiniteSlider2 имеет следующие настройки:

```js
jQuery(document).ready(function($) {
  $('#infinite-slider2').infiniteSlider2({
    // основные настройки
    width: 100, // ширина слайдера, только %
    height: 'auto', // высота слайдера, px / 'auto'
    arrows: true, // отобразить кнопки-стрелки, boolean
    toggles: true, // отобразить переключатели, boolean
    labels: true, // отобразить ярлыки, boolean

    // фон слайдов
    slideBackgroundColor: [ // фоновые цвета
      '#5eabe7',
      '#cca27e',
      '#7e4c39',
      '#83595e',
      '#2e2432'
    ],
    slideBackgroundImage: [], // фоновые изображения, ['url()', 'url()', 'url()' ...]

    // кнопки-стрелки
    arrowWidth: 32, // ширина, px
    arrowHeight: 76, // высота, px
    arrowMargin: 20, // отступ от левого/правого края, px
    arrowBackgroundColor: '', // цвет фона
    arrowBackgroundImageRight: '', // изображение для правой кнопки, url()
    arrowBackgroundImageLeft: '', // изображение для левой кнопки, url()
    arrowFill: 'white', // цвет
    arrowOpacity: 0.4, // прозрачность
    arrowAnimate: true, // разрешить анимацию при наведении

    // переключатели
    toggleShape: 'circle', // форма, 'circle' / 'square'
    toggleWidth: 16, // ширина, px
    toggleHeight: 16, // высота, px
    toggleGutter: 8, // промежуток, px
    toggleOpacity: 1, // прозрачность
    toggleColor: '', // цвет
    toggleActiveColor: '', // цвет активного переключателя
    toggleBorder: '3px solid rgba(255, 255, 255, 0.4)', // обводка
    toggleActiveBorder: '3px solid white', // обводка активного переключателя
    toggleMargin: 30, // отступ от нижнего края, px
    toggleAnimate: true, // разрешить анимацию при наведении, boolean

    // ярлыки
    slideLabelWidth: 74, // ширина, px
    slideLabelHeight: 74, // высота, px
    slideLabelBorderWidth: 3, // ширина обводки, px
    slideLabelBorderStyle: 'solid', // стиль обводки
    slideLabelBorderColor: 'rgba(255, 255, 255, 0.4)', // цвет обводки
    slideActiveLabelBorderColor: 'white', // цвет обводки активного ярлыка
    slideLabelBackgroundColor: [ // фоновые цвета
      '#5eabe7',
      '#cca27e',
      '#7e4c39',
      '#83595e',
      '#2e2432'
    ],
    slideLabelImage: [], // фоновые изображения, ['url()', 'url()', 'url()' ...]

    // дополнительные настройки
    autoplay: true, // разрешить автопролистывание слайдера, boolean
    slideInterval: 6000, // интервал между пролистываниями, ms
    slideDuration: 600, // длительность анимации пролистывания, ms
    cursor: 'pointer' // курсор при наведении на управляющие элементы
  });
});
```

#### Примечания
При подключении библиотеки jQuery через Google CDN требуется установка проекта на сервер.
