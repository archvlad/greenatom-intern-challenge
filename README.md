## Описание решения
Фронтэнд написан на React, для управления состоянием используется MobX, в качестве фрэймворка компонентов выбрал Mui.
В Directus созданы две коллекции `albums` и `photos` со связью Many to One.

## Доступ к Directus
    ADMIN_EMAIL: "admin@example.com"
    ADMIN_PASSWORD: "d1r3ctu5"
## Запуск бэкэнда

`cd backend`
`docker compose up`

## Запуск фронтэнда

`cd frontend`
`npm install`
`npm run dev`

