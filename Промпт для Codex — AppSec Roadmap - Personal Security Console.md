# Промпт для Codex — AppSec Roadmap / Personal Security Console

Создай полностью рабочее статическое web-приложение для моего годового обучения Application Security.

Это не должен быть просто красивый landing page или макет. Мне нужен реально используемый инструмент, который я смогу открыть каждый день в течение примерно года, отмечать прогресс, записывать изученное и видеть свой путь до Junior AppSec Engineer.

## 1. Главная идея

Название приложения придумай сам, но оно должно ощущаться как персональная консоль/терминал инженера безопасности.

Возможные направления нейминга:

- APPSEC // ПУЛЬТ
- SEC.TRAJECTORY
- УЗЕЛ // APPSEC
- KONTUR
- VECTOR.SEC
- СЕКТОР A
- PROTOCOL: APPSEC

Не используй банальные названия вроде Cyber Dashboard, Hacker Roadmap, Security Tracker.

Интерфейс полностью на русском языке, но технические термины оставляй на английском там, где так естественнее:

- HTTP Request
- SAST
- DAST
- SSRF
- Secure Coding
- Threat Modeling
- CI/CD

---

# 2. Технологии

Используй:

- Vite
- React
- TypeScript
- обычный CSS
- localStorage

Не использовать:

- backend
- базы данных
- Firebase
- Supabase
- авторизацию
- Tailwind
- Material UI
- Ant Design
- shadcn
- Bootstrap
- тяжёлые chart-библиотеки

Приложение должно нормально деплоиться как статический сайт на Vercel.

Все данные пользователя должны храниться локально в браузере.

Архитектуру сделай аккуратной:

- `src/components`
- `src/pages`
- `src/data`
- `src/hooks`
- `src/utils`
- `src/types`
- `src/styles`

Roadmap и учебные материалы не хардкодь непосредственно в JSX. Вынеси их в структурированный TypeScript-файл.

---

# 3. Визуальная концепция

ВАЖНО: не делай типичный дизайн, который генерируют AI-сервисы.

Запрещён визуальный стиль:

- куча одинаковых rounded cards;
- огромные border-radius;
- purple/blue SaaS gradient;
- glassmorphism;
- Matrix с кислотно-зелёным текстом;
- бессмысленные glowing-кнопки;
- stereotypical hacker skull;
- капюшоны;
- замки;
- binary rain;
- generic cybersecurity stock aesthetic.

Мне нужна оригинальная эстетика.

## Концепция

Представь интерфейс рабочего терминала инженера из условного российского НИИ будущего.

Смешай:

- тёмную инженерную консоль;
- советскую/постсоветскую техническую документацию;
- чертежи;
- ГОСТ-подобную сетку;
- маркировку электронных блоков;
- старые CRT-терминалы;
- современную AppSec-инженерию.

Но:

НЕ использовать:

- политические символы;
- флаги;
- гербы;
- серп и молот;
- военную пропагандистскую эстетику.

Это должна быть именно российская инженерно-техническая атмосфера.

## Цвета

Основной фон:

- почти чёрный графит;
- тёмно-серый;
- слегка холодный оттенок.

Основной текст:

- грязно-белый;
- светло-серый.

Акценты:

- приглушённый красно-оранжевый;
- янтарный;
- иногда холодный cyan для информационных элементов.

Не использовать чистый `#00ff00`.

Прогресс можно показывать оттенками:

- серый — не начато;
- янтарный — изучаю;
- cyan — практиковал;
- спокойный зелёный — могу объяснить.

## Типографика

Комбинируй:

- нормальный UI sans-serif;
- monospace для технических элементов.

Используй системные шрифты или безопасные web-font fallbacks.

Не требуй загрузки внешних шрифтов.

## Детали

Добавь очень умеренно:

- тонкую фоновую инженерную сетку;
- лёгкий CRT/noise overlay через CSS;
- технические номера секций;
- маленькие подписи наподобие:

`УЗЕЛ 04`

`STATUS: ACTIVE`

`TRACK // WEB-SEC`

`REV. 2026`

`SECURITY CLEARANCE: STUDENT`

Можно использовать декоративные линии, координаты, номера блоков.

Эффекты должны быть очень сдержанными.

Не ухудшать читаемость.

---

# 4. Структура приложения

Сделай основной navigation с разделами:

1. `Пульт`
2. `Маршрут`
3. `Сегодня`
4. `Материалы`
5. `Активность`
6. `Повторение`
7. `Отчёт`
8. `Данные`

На мобильном устройстве навигация должна оставаться удобной.

---

# 5. ПУЛЬТ

Это главный dashboard.

Показывай:

## Общий прогресс

Например:

`APPSEC TRAJECTORY`

`138 / 420 задач`

`32.8%`

Большой аккуратный progress indicator.

Не обязательно круглый.

Можно сделать что-то похожее на шкалу аппаратного прибора.

---

## Текущий этап

Например:

`ЭТАП 03 // WEB SECURITY`

Показывать:

- название;
- прогресс;
- сколько задач осталось;
- следующую рекомендованную тему.

---

## Сегодня

Показывать:

`СЕГОДНЯ // 20.08.2026`

Если активности ещё не было:

`Активность сегодня не зарегистрирована`

Кнопка:

`+ ЗАПИСАТЬ РЕЗУЛЬТАТ`

---

## Серия

Показывать:

- текущий streak;
- максимальный streak;
- количество активных дней за последние 30 дней.

Но не превращать приложение в Duolingo.

Никаких агрессивных уведомлений или ощущения наказания за пропущенный день.

---

## Статистика знаний

Показывать количество тем:

- не начато;
- изучаю;
- практиковал;
- могу объяснить.

---

## Очередь повторения

Например:

`НА ПОВТОРЕНИЕ: 4`

И несколько ближайших тем.

---

## Годовой heatmap

Небольшая версия календаря активности прямо на dashboard.

---

# 6. МАРШРУТ

Это центральная часть приложения.

Сделай вертикальную или комбинированную дорожную карту примерно на 12 месяцев.

Roadmap должен состоять из этапов.

Каждый этап содержит:

- название;
- ориентировочный месяц;
- объяснение, зачем он нужен;
- темы;
- практические задания;
- материалы;
- checkpoint для перехода дальше.

Не блокировать следующие этапы программно.

Пользователь всегда может открыть любую тему.

---

# 7. Система статусов знания

Для каждой темы использовать не checkbox, а status:

### 0. Не начинал

Тема только предстоит.

### 1. Изучаю

Прочитал/посмотрел теорию.

### 2. Практиковал

Делал лабораторию, писал код, исследовал руками.

### 3. Могу объяснить

Считаю, что могу без подсказки объяснить:

- что это;
- зачем нужно;
- как работает;
- типичные ошибки;
- пример.

Именно статус `Могу объяснить` считать полноценным освоением темы.

Разрешить менять статус назад.

---

# 8. Roadmap на год

Заполни приложение следующими этапами.

## ЭТАП 01 // SYSTEM BASE

Ориентир: месяц 1.

### Linux

Темы:

- файловая система;
- пользователи;
- группы;
- permissions;
- chmod;
- chown;
- sudo;
- процессы;
- ps;
- kill;
- systemd;
- environment variables;
- PATH;
- stdin;
- stdout;
- stderr;
- pipes;
- grep;
- find;
- sed;
- awk;
- curl;
- wget;
- ssh.

Практика:

- искать файлы;
- фильтровать вывод;
- искать процессы;
- смотреть открытые порты;
- работать с правами;
- собрать несколько bash pipelines.

### Networking

Темы:

- OSI как концепция;
- IP;
- IPv4;
- CIDR;
- TCP;
- UDP;
- ports;
- TCP handshake;
- DNS;
- DHCP;
- NAT;
- routing;
- localhost;
- firewall;
- proxy;
- VPN;
- TLS basics.

Инструменты:

- ping;
- ip;
- ss;
- dig;
- nslookup;
- traceroute;
- tcpdump;
- Wireshark;
- nmap;
- curl.

Checkpoint:

Я могу объяснить путь запроса от браузера до удалённого HTTP-сервера.

---

# ЭТАП 02 // WEB INTERNALS

Ориентир: месяц 2.

Темы:

## HTTP

- request;
- response;
- HTTP methods;
- headers;
- body;
- query parameters;
- status codes;
- Content-Type;
- cookies;
- caching;
- redirects.

## Web

- HTML basics;
- forms;
- JavaScript basics;
- DOM;
- fetch;
- XHR;
- localStorage;
- sessionStorage;
- cookies;
- Same-Origin Policy;
- CORS basics.

## Backend

- browser → web server → backend → database;
- REST API;
- JSON;
- reverse proxy;
- authentication;
- authorization;
- session;
- bearer token;
- JWT basics.

Checkpoint:

Могу взять HTTP-запрос из Burp/ZAP и объяснить практически каждую его часть.

---

# ЭТАП 03 // WEB SECURITY I

Ориентир: месяц 3.

Темы:

- SQL Injection;
- Command Injection;
- Path Traversal;
- File Upload vulnerabilities;
- Information Disclosure;
- Authentication vulnerabilities;
- Password security;
- Session vulnerabilities.

Практика в PortSwigger Web Security Academy.

Дополнительно:

- OWASP Juice Shop;
- WebGoat;
- DVWA.

Для каждой уязвимости создать одинаковый learning checklist:

1. Что это?
2. Почему возникает?
3. Где искать?
4. Как проверить?
5. Как эксплуатируется?
6. Какой impact?
7. Как исправить?
8. Как выглядит уязвимый код?
9. Как выглядит исправленный код?
10. Могу ли я объяснить её без конспекта?

---

# ЭТАП 04 // WEB SECURITY II

Ориентир: месяц 4.

Темы:

- XSS;
- Reflected XSS;
- Stored XSS;
- DOM XSS;
- CSRF;
- CORS;
- Same-Origin Policy;
- CSP basics;
- Access Control;
- IDOR;
- Broken Access Control;
- Business Logic vulnerabilities.

Практика:

PortSwigger labs.

---

# ЭТАП 05 // ADVANCED WEB

Ориентир: месяц 5.

Темы:

- SSRF;
- XXE;
- SSTI;
- Insecure Deserialization;
- JWT vulnerabilities;
- OAuth basics;
- OAuth vulnerabilities;
- WebSockets;
- Race Conditions;
- HTTP Request Smuggling basics;
- NoSQL Injection;
- API Testing;
- GraphQL basics.

Не требовать экспертного уровня по Request Smuggling.

---

# ЭТАП 06 // CODE

Ориентир: месяц 6.

## Python

Темы:

- variables;
- collections;
- conditions;
- loops;
- functions;
- exceptions;
- files;
- modules;
- requests;
- JSON;
- regex;
- CLI scripts;
- classes basics.

Практические mini-tools:

- HTTP checker;
- простой URL enumerator;
- parser HTTP responses;
- анализ JSON;
- небольшой CLI security helper.

Не создавать offensive malware.

## JavaScript

Темы:

- syntax;
- functions;
- objects;
- promises;
- async/await;
- fetch;
- DOM;
- innerHTML;
- document.cookie;
- localStorage;
- URL;
- postMessage;
- JSON;
- eval как dangerous sink.

## SQL

Темы:

- SELECT;
- WHERE;
- JOIN;
- INSERT;
- UPDATE;
- DELETE;
- prepared statements;
- transactions basics.

---

# ЭТАП 07 // SECURE CODING & CODE REVIEW

Ориентир: месяц 7.

Темы:

- input validation;
- output encoding;
- sanitization;
- parameterized queries;
- password hashing;
- secrets;
- authentication;
- authorization;
- session management;
- logging;
- safe file upload;
- SSRF protection;
- CORS configuration;
- CSRF protection;
- cryptography basics.

Отдельный раздел:

`SOURCE → SINK`

Учиться находить:

- untrusted input;
- source;
- data flow;
- dangerous sink;
- validation;
- sanitization.

Практика:

Для каждой изученной web vulnerability:

- найти пример vulnerable code;
- объяснить причину;
- исправить;
- проверить fix.

Основной справочник:

OWASP Cheat Sheet Series.

---

# ЭТАП 08 // APPSEC TOOLCHAIN

Ориентир: месяц 8.

Темы:

## SAST

- что такое SAST;
- false positive;
- true positive;
- source/sink analysis;
- rules.

Инструменты:

- Semgrep;
- CodeQL basics;
- SonarQube conceptually.

Практика:

создать несколько своих простых Semgrep rules.

## SCA

Темы:

- dependency;
- transitive dependency;
- CVE;
- CWE;
- CVSS;
- vulnerable package.

## SBOM

Темы:

- что такое SBOM;
- зачем он нужен;
- CycloneDX;
- SPDX conceptually.

## Secret scanning

Темы:

- API keys;
- passwords;
- private keys;
- credentials accidentally committed to Git.

## DAST

- OWASP ZAP;
- Burp;
- отличие manual testing и automated DAST.

---

# ЭТАП 09 // CI/CD & CONTAINERS

Ориентир: месяц 9.

Темы:

## CI/CD

- pipeline;
- job;
- stage;
- runner;
- artifact;
- environment;
- secret;
- build;
- test;
- deploy.

Изучить один вариант нормально:

- GitHub Actions

или

- GitLab CI.

Добавить практический проект:

Pipeline:

`commit`

↓

`tests`

↓

`SAST`

↓

`SCA`

↓

`secret scan`

↓

`build`

↓

`container scan`

## Docker

Темы:

- image;
- container;
- Dockerfile;
- registry;
- volume;
- network;
- port mapping;
- environment variables;
- layers.

Security:

- running as root;
- secrets in image;
- secrets in ENV;
- vulnerable base image;
- excessive capabilities;
- privileged containers;
- exposed services.

---

# ЭТАП 10 // THREAT MODELING & SSDLC

Ориентир: месяц 10.

Темы:

## Threat Modeling

- assets;
- entry points;
- trust boundaries;
- Data Flow Diagram;
- attack surface;
- abuse cases;
- threats;
- mitigations;
- STRIDE.

Практика:

нарисовать threat model для:

- простого интернет-магазина;
- REST API;
- file upload service;
- системы авторизации.

## Secure SDLC

Этапы:

- requirements;
- design;
- implementation;
- testing;
- deployment;
- operations.

Связать:

Requirements → Security Requirements

Design → Threat Modeling

Development → Secure Coding + SAST

Dependencies → SCA

Testing → DAST + manual testing

Deployment → Container/IaC scanning

Operations → Vulnerability Management

Изучить:

- OWASP SAMM;
- OWASP ASVS.

Использовать актуальную ASVS 5.x.

---

# ЭТАП 11 // API & SUPPLY CHAIN

Ориентир: месяц 11.

API Security:

- REST;
- OpenAPI;
- Swagger;
- authentication;
- authorization;
- object-level authorization;
- function-level authorization;
- mass assignment;
- rate limiting;
- resource consumption;
- API inventory;
- GraphQL security basics.

Supply Chain:

- dependencies;
- package managers;
- lock files;
- malicious dependencies conceptually;
- dependency confusion conceptually;
- SBOM;
- package provenance;
- artifact integrity.

Использовать OWASP API Security Top 10 как дополнительный ориентир.

---

# ЭТАП 12 // APPSEC ENGINEER CAPSTONE

Ориентир: месяц 12.

Создать итоговый проект.

Можно использовать специально уязвимое приложение или своё учебное приложение.

Нужно выполнить полный AppSec lifecycle:

1. Описать архитектуру.
2. Нарисовать Data Flow Diagram.
3. Определить assets.
4. Провести threat modeling.
5. Составить security requirements.
6. Провести ручное web security testing.
7. Провести code review.
8. Подключить SAST.
9. Подключить SCA.
10. Добавить secret scanning.
11. Создать SBOM.
12. Настроить CI/CD security pipeline.
13. Проверить Docker security.
14. Найти несколько проблем.
15. Исправить их.
16. Повторно проверить.
17. Написать небольшой AppSec assessment report.

Итог:

`Я способен пройти путь`

`DESIGN → CODE → TEST → FIX → AUTOMATE`

---

# 9. Материалы

Создай отдельную вкладку `Материалы`.

Материалы должны быть привязаны к соответствующим темам roadmap.

Категории:

- Основной материал
- Практика
- Справочник
- Дополнительно

Используй прежде всего бесплатные официальные источники.

Добавь:

- PortSwigger Web Security Academy;
- OWASP Top 10:2025;
- OWASP Web Security Testing Guide;
- OWASP Cheat Sheet Series;
- OWASP Juice Shop;
- OWASP WebGoat;
- DVWA;
- OWASP ASVS 5.0;
- OWASP SAMM;
- OWASP API Security Top 10;
- Semgrep documentation;
- CodeQL documentation;
- GitHub Actions documentation;
- Docker documentation;
- MDN Web Docs для HTTP/JS/Web;
- Python official tutorial.

Для каждого материала хранить:

- `title`
- `type`
- `language`
- `free`
- `url`
- `description`
- `relatedTopicIds`

Приоритет отдавать бесплатным материалам.

Если качественный материал только английский, честно отметить `EN`.

Не добавлять сомнительные пиратские копии книг или курсов.

---

# 10. Карточка темы

При открытии темы должна появляться полноценная view/modal/panel.

Показывать:

- название;
- этап;
- короткое объяснение;
- зачем это AppSec-инженеру;
- prerequisite;
- статус;
- confidence;
- материалы;
- практические задания;
- личные заметки;
- вопросы для самопроверки.

Добавить поле:

`Объясни своими словами`

Большой textarea.

Подсказка:

`Представь, что объясняешь тему человеку, который вообще не занимается безопасностью.`

Это важная функция.

---

# 11. Confidence

Для каждой темы пользователь может установить:

`0 — вообще не понимаю`

`1 — видел`

`2 — примерно понимаю`

`3 — могу применить с подсказкой`

`4 — могу применить самостоятельно`

`5 — могу объяснить другому`

В roadmap показывать маленький indicator confidence.

---

# 12. СЕГОДНЯ

Отдельная страница для ежедневной записи обучения.

Форма:

## Что изучал сегодня?

Можно выбрать одну или несколько roadmap-тем.

## Сколько времени?

Быстрые варианты:

- 15 минут
- 30 минут
- 45 минут
- 1 час
- 1.5 часа
- 2 часа
- другое

## Что нового узнал?

Textarea.

## Что сделал руками?

Textarea.

Например:

- лаборатория;
- команда;
- написал код;
- разобрал HTTP request;
- исправил vulnerability.

## Объяснение своими словами

Textarea.

Вопрос:

`Как бы ты объяснил главное, что сегодня понял, человеку без технического опыта?`

## Что осталось непонятно?

Textarea.

## Оценка дня

Не делать mood tracker.

Сделать:

`Насколько полезной была сегодняшняя сессия?`

1–5.

После сохранения день становится активным в календаре.

---

# 13. ГОДОВОЙ КАЛЕНДАРЬ АКТИВНОСТИ

Сделай GitHub-like yearly heatmap.

Но визуально адаптируй под дизайн приложения.

Показывать последние 365 дней.

Intensity зависит от количества минут обучения:

0 — ничего;

1 — до 20 минут;

2 — 20–45;

3 — 45–90;

4 — больше 90.

При hover показывать:

`20 августа`

`72 минуты`

`3 темы`

При click открывать запись соответствующего дня.

Также показать:

- активных дней;
- всего часов;
- среднее время;
- longest streak;
- current streak.

---

# 14. «ОТЧЁТ ДЕВУШКЕ»

Это отдельная реально полезная функция.

Название страницы можно сделать:

`DEBRIEF`

или

`Отчёт`.

Она должна автоматически составлять красивый текст из сегодняшнего learning log.

Например:

`Сегодня занимался AppSec 1 ч 20 мин.`

`Разобрал: Same-Origin Policy и CORS.`

`Главное, что понял: браузер ограничивает чтение ответов между разными origin, а CORS позволяет серверу явно определить допустимые origin.`

`Практика: перехватывал запросы через proxy и проходил лабораторию.`

`Пока не до конца понял: preflight caching.`

Добавить варианты:

- сегодняшний отчёт;
- отчёт за неделю;
- отчёт за месяц.

Кнопка:

`КОПИРОВАТЬ`

Использовать Clipboard API.

Никакого AI/API.

Текст генерируется шаблонно из пользовательских записей.

---

# 15. WEEKLY REVIEW

Добавить в отчёт недельную сводку:

- сколько дней занимался;
- сколько времени;
- какие темы изучал;
- какие темы перешли в `Практиковал`;
- какие перешли в `Могу объяснить`;
- что осталось непонятным;
- что рекомендуется продолжить на следующей неделе.

---

# 16. Система повторения

Добавить простую spaced repetition систему без сложных алгоритмов.

Когда тема получает статус `Могу объяснить`, поставить повторение через:

- 1 день;
- 3 дня;
- 7 дней;
- 14 дней;
- 30 дней;
- 60 дней.

Хранить review stage.

Страница `Повторение` показывает темы, которые пора проверить.

Для темы кнопки:

- `Не помню`
- `С трудом`
- `Помню`
- `Легко`

Логика может быть простой.

При `Не помню` уменьшать confidence и назначать ближайшее повторение.

При `Легко` двигаться дальше по интервалам.

Не пытаться реализовать полноценный Anki.

---

# 17. Вопросы для самопроверки

У roadmap topic может быть массив вопросов.

Например для DNS:

- Что делает DNS?
- Чем A отличается от CNAME?
- Что такое TXT record?
- Чем recursive resolver отличается от authoritative DNS?
- Что происходит после ввода домена в браузер?

Для SQL Injection:

- Почему возникает SQL Injection?
- Что такое parameterized query?
- Почему escaping хуже prepared statements?
- Как определить потенциальный SQLi sink в коде?
- Какой impact возможен?

Эти вопросы отображать при review.

Ответы пользователь пишет сам.

Не проверять их автоматически.

---

# 18. Поиск

Добавить глобальный поиск.

Искать по:

- теме;
- инструменту;
- vulnerability;
- resource;
- заметкам.

Например ввод:

`SSRF`

сразу показывает:

- roadmap topic;
- связанные материалы;
- пользовательские заметки.

---

# 19. Фильтры

Roadmap можно фильтровать:

- Не начато
- Изучаю
- Практиковал
- Могу объяснить
- На повторение
- Web
- Code
- AppSec
- DevSecOps
- Architecture

---

# 20. Хранение данных

Все пользовательские данные должны сохраняться автоматически.

Использовать localStorage.

Создать понятную versioned schema, например:

`appsec-console-state-v1`

Данные curriculum должны быть отдельно от пользовательского progress.

Не записывать огромный curriculum целиком в localStorage.

Сохранять только пользовательские изменения.

Например:

- progress;
- notes;
- dailyLogs;
- reviews;
- settings.

---

# 21. Экспорт и импорт

Это КРИТИЧЕСКИ важно, потому что данные будут собираться год.

Страница `Данные`.

Добавить:

`ЭКСПОРТ JSON`

Скачать весь пользовательский прогресс в JSON-файл.

Добавить:

`ИМПОРТ JSON`

Проверять структуру импортируемого файла.

Не ломать приложение при неправильном JSON.

Добавить:

`СБРОСИТЬ ПРОГРЕСС`

С двойным подтверждением.

---

# 22. Backup reminder

Так как backend отсутствует, на странице данных показать:

`Все записи хранятся только в этом браузере.`

`Периодически экспортируй резервную копию.`

На dashboard ненавязчиво показывать предупреждение, если backup не делался более 30 дней.

Хранить дату последнего экспорта.

---

# 23. Статистика

Добавить страницу/блок статистики, но без бесполезных графиков.

Полезные показатели:

- % roadmap;
- тем изучается;
- тем практиковалось;
- тем могу объяснить;
- активные дни;
- часы обучения;
- streak;
- самая активная неделя;
- наиболее изучаемая область;
- количество лабораторий;
- количество практических задач;
- количество reviews.

Показать progress по направлениям:

`SYSTEM`

`WEB`

`WEB SECURITY`

`CODE`

`SECURE CODING`

`APPSEC`

`DEVSECOPS`

`ARCHITECTURE`

Использовать CSS bars, не chart library.

---

# 24. «Что делать дальше?»

На dashboard должен быть блок:

`NEXT OBJECTIVE`

Логика:

1. Найти первый незавершённый topic текущего этапа.
2. Если есть overdue review — сначала предложить его.
3. Если тема `Изучаю`, предложить практическое задание.
4. Если `Практиковал`, предложить объяснить своими словами.
5. Если весь этап закончен — предложить checkpoint.

Это должно избавлять меня от ситуации:

`У меня есть 300 тем, и я не понимаю, что открыть сегодня.`

---

# 25. Checkpoints

В конце каждого этапа отдельный checkpoint.

Пример:

`ЭТАП 02 // CHECKPOINT`

Я могу:

- объяснить HTTP request;
- объяснить cookie;
- отличить authentication от authorization;
- рассказать, что делает browser после ввода URL;
- объяснить Same-Origin Policy;
- перехватить и изменить запрос в proxy.

Каждый checkpoint можно отметить:

- нет;
- частично;
- да.

---

# 26. Настройки

Минимальные настройки:

- отключить CRT/noise;
- compact mode;
- начало учебного пути;
- weekly target в минутах.

Начальная дата по умолчанию должна быть текущей датой первого запуска.

На основе неё показывать:

`ДЕНЬ 1`

`ДЕНЬ 52`

и т.д.

Но не блокировать roadmap календарём.

---

# 27. Responsive

Приложение должно отлично работать:

- desktop;
- laptop;
- tablet;
- телефон.

Особенно хорошо должна работать страница `Сегодня`, потому что записи я могу делать с телефона.

Не делать таблицы, которые ломаются на мобильном.

---

# 28. Accessibility

Обязательно:

- нормальный keyboard navigation;
- focus states;
- semantic HTML;
- aria-label там, где необходимо;
- достаточный contrast;
- учитывать `prefers-reduced-motion`.

---

# 29. Анимации

Анимаций мало.

Разрешены:

- короткий reveal;
- progress transition;
- hover технических элементов;
- очень слабый cursor blink;
- переход между статусами.

Запрещены:

- огромные page transitions;
- постоянное мерцание;
- отвлекающий glitch;
- flying particles.

---

# 30. Boot sequence

При самом первом запуске можно показать короткую заставку максимум на ~700 мс:

`INITIALIZING APPSEC TRAJECTORY`

`LOCAL STORAGE ........ OK`

`CURRICULUM ............ LOADED`

`OPERATOR .............. READY`

После первого раза её больше автоматически не показывать.

Должна отключаться через localStorage.

---

# 31. Empty states

Все пустые состояния должны выглядеть продуманно.

Не писать generic:

`No data found`.

Например:

`Журнал пока пуст.`

`Запиши первую учебную сессию — она появится здесь.`

---

# 32. Демо-данные

НЕ заполнять пользовательский progress фиктивными выполненными задачами.

При первом запуске всё должно быть честно пустым.

Curriculum и resources, естественно, должны быть заполнены.

---

# 33. Код

Требования к качеству:

- strict TypeScript;
- понятные type definitions;
- небольшие компоненты;
- без gigantic `App.tsx`;
- без `any`, если это не абсолютно необходимо;
- reusable components;
- utility functions отдельно;
- даты считать без тяжёлых библиотек;
- localStorage parsing делать безопасно;
- предусмотреть version migration;
- не допускать crash из-за повреждённого localStorage.

---

# 34. Data model

Примерно продумай следующие entities:

`RoadmapStage`

`RoadmapTopic`

`Resource`

`TopicProgress`

`DailyLog`

`ReviewState`

`AppSettings`

`BackupMetadata`

Не обязательно буквально повторять названия, если найдёшь архитектурно более хороший вариант.

---

# 35. README

Создай хороший README.md.

В нём:

- что это;
- screenshots section placeholder;
- технологии;
- local development;
- build;
- deploy to Vercel;
- где находятся curriculum data;
- как добавлять новый topic;
- как добавлять resource;
- где хранятся пользовательские данные;
- как сделать backup.

Команды:

`npm install`

`npm run dev`

`npm run build`

---

# 36. Vercel

Приложение должно корректно работать после:

`npm run build`

Не должно требовать environment variables.

Если используется client-side routing, настрой корректный fallback для Vercel либо используй routing, который не требует серверной конфигурации.

Предпочтительно сделать приложение максимально простым для static hosting.

---

# 37. Финальная проверка

Перед завершением проекта самостоятельно проверь:

### Persistence

1. Изменить статус темы.
2. Refresh.
3. Статус сохранился.

### Daily log

1. Создать запись сегодня.
2. Refresh.
3. Запись сохранилась.
4. Heatmap обновился.

### Export

1. Экспортировать JSON.
2. Очистить данные.
3. Импортировать JSON.
4. Прогресс восстановился.

### Review

1. Пометить тему освоенной.
2. Создать review.
3. Убедиться, что она появляется в нужное время.

### Responsive

Проверить примерно:

- 1440 px;
- 1024 px;
- 768 px;
- 390 px.

### Build

`npm run build`

должен завершаться без ошибок.

---

# 38. Приоритет реализации

Не пытайся сначала сделать декоративный masterpiece.

Приоритет:

1. Data model.
2. Roadmap.
3. localStorage.
4. Topic progress.
5. Daily journal.
6. Activity heatmap.
7. Export/import.
8. Review system.
9. Reports.
10. Search.
11. Statistics.
12. Visual polish.

---

# 39. Главное правило продукта

Это приложение должно отвечать на три вопроса за несколько секунд:

### Где я сейчас?

Показывает мой реальный прогресс.

### Что мне изучать следующим?

Даёт один понятный `NEXT OBJECTIVE`.

### Что я реально выучил?

Отличает:

`я это видел`

от

`я делал это руками`

и

`я способен объяснить это другому`.

Приложение должно ощущаться не как TODO-list, а как персональный учебный AppSec cockpit, который будет приятно открывать каждый день в течение года.

Сначала создай структуру приложения и data model, затем реализуй core functionality, после этого визуальный слой.

Не останавливайся на mockup.

Сгенерируй весь рабочий проект целиком.