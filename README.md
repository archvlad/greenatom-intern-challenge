## Описание решения
Фронтэнд написан на React, для управления состоянием используется MobX, в качестве фрэймворка компонентов выбрал Mui.
В Directus созданы две коллекции `albums` и `photos` со связью Many to One.

## Доступ к Directus
    ADMIN_EMAIL: "admin@example.com"
    ADMIN_PASSWORD: "d1r3ctu5"
## Запуск бэкэнда

`cd backend`

`docker compose up`

Directus доступен по http://localhost:8055/

## Запуск фронтэнда

`cd frontend`

`npm install`

`npm run dev`

Фронтэнд досупен по http://localhost:5173/

## Скриншоты

![image](https://github.com/user-attachments/assets/959cf372-6618-495a-8c0a-94e559f1cb89)

![image](https://github.com/user-attachments/assets/2a4ffbd5-d83d-4ad6-bcd9-f7a1b278ec07)

![image](https://github.com/user-attachments/assets/4a981cfa-a8cb-44d2-96fa-e604e7bd7ac0)
