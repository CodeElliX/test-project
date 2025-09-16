# 🌸 Flower Delivery App

Полнофункциональное веб-приложение для доставки цветов, разработанное с использованием современного стека технологий: **React + TypeScript + Redux Toolkit** на фронтенде и **Node.js + Express + MongoDB** на бэкенде.

## 🚀 Стек технологий

### Frontend
- **React** — библиотека для построения пользовательского интерфейса
- **TypeScript** — типизация для повышения надёжности кода
- **Redux Toolkit** — управление состоянием приложения
- **Redux Thunk** — асинхронные действия
- **CSS Modules** — модульные стили для компонентов

### Backend
- **Node.js + Express** — серверная часть и маршрутизация
- **TypeScript** — типизация серверного кода
- **MongoDB + Mongoose** — база данных и ORM
- **CORS** — настройка доступа между фронтендом и бэкендом

---

## 📦 Установка и запуск

### 1. Клонирование репозитория
```bash
git clone https://github.com/CodeElliX/test-project.git
cd test-project
```
### 2. Установка зависимостей

#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd ../server
npm install
```

### 3. Настройка переменных окружения
Создай файл .env в папке server и добавь туда:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Запуск проекта


#### Backend
```bash
npm run dev
```

#### Frontend
Открой новую вкладку терминала и запусти:
```bash
cd client
npm start
```

## 📁 Структура проекта

test-project/
│
├── flower-delivery/                     # React-приложение (Frontend)
│   ├── src/
│   │   ├── components/                  # UI-компоненты
│   │   ├── redux/                       # Redux Toolkit store и слайсы
│   │   ├── styles/                      # CSS-модули
│   │   └── App.tsx
│   ├── public/                          # Статические файлы
│   ├── package.json
│   └── tsconfig.json

├── flower-delivery-backend/            # Express-сервер (Backend)
│   ├── src/
│   │   ├── controllers/                # Логика обработки запросов
│   │   ├── models/                     # Mongoose-схемы
│   │   ├── routes/                     # API-маршруты
│   │   ├── middleware/                 # CORS и другие middlewares
│   │   └── index.ts                    # Точка входа
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                            # Переменные окружения

