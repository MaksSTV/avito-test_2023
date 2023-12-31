# Тестовое задание для стажёра Frontend

## [Приложение](https://maksstv-avito-test-2023.netlify.app/)

Разработать интерфейс для сайта [Free-To-Play Games](https://www.freetogame.com/), состоящий из двух страниц.

# Важно 
Предоставленное [API](https://www.freetogame.com/api-doc) c прослойкой [RapidAPI](https://rapidapi.com/digiwalls/api/free-to-play-games-database), которое рекомендуют использовать разработчики freetogame, иногда временно падает и не работает из некоторых стран.

- Работает
  - США
  - Ирландия
- Не работает
  - Россия
  - Германия

## Описание

### Главная страница
- Показывает игры
    - Игры можно отфильтровать по платформе и жанру (например, шутер)
    - Игры можно отсортировать по дате релиза, популярности и тд
- Каждая игра в списке содержит:
	- название
	- дата релиза (в российском формате)
    - издатель
    - жанр
    - картинка
- По клику на игру происходит переход на страницу игры
- Во время загрузки игры есть индикатор загрузки
- Если не получилось получить данные, пользователю выводится ошибка
### Страница игры
- Содержит:	
	- название
	- дата релиза (в российском формате)
    - издатель
    - разработчик
    - жанр
    - картинка/постер
    - карусель скриншотов
    - системные требования
- На странице есть кнопка для возврата к списку игр
- Во время загрузки игры есть индикатор загрузки
- Если не получилось получить данные, пользователю выводится ошибка

## Особенности:

- Адаптивный интерфейс
- Приложение разработано с помощью React 18+ и Redux / Redux Toolkit
- Использован [Free-To-Play Games API](https://www.freetogame.com/api-doc).
- Роутинг выполнен с использованием [React Router v6](https://reactrouter.com/en/main)
- Фреймворк UI [Material UI](https://mui.com/)
- [Swiper](https://swiperjs.com/)
- Пакетный менеджер `npm`
- Приложение запускается по адресу `localhost:3001` командой `npm start`
- При переходах по ссылкам страница не перезагружается
- Если карточка игры была открыта, то она доступна при последующих открытиях (перезагрузках) страницы без дополнительного запроса в течение 5 минут

## Выполненные опциональные задания
- Использование TypeScript
- Список игр может содержать тысячи тайтлов
- При неудачном запросе три попытки повторного запроса
