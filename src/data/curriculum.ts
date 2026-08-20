import type { Area, Resource, RoadmapStage, RoadmapTopic } from '../types';

type TopicSeed = [string, string, string, string];
const seeds: Array<[string, string, Area, TopicSeed[]]> = [
  ['system', 'SYSTEM BASE', 'SYSTEM', [
    ['linux-files', 'Linux: файловая система и права', 'Файлы, пользователи, группы, permissions, chmod, chown и sudo.', 'Разбираться в хосте и правах — базовое условие безопасной эксплуатации.'],
    ['linux-processes', 'Linux: процессы и сервисы', 'ps, kill, systemd, environment variables, PATH и файловые дескрипторы.', 'Помогает видеть, что именно запущено и с какими правами.'],
    ['linux-cli', 'Linux: командная строка', 'stdin/stdout/stderr, pipes, grep, find, sed, awk, curl, wget, ssh.', 'CLI нужна для исследования, автоматизации и воспроизводимых проверок.'],
    ['network-basics', 'Networking: IP и маршрутизация', 'OSI как концепция, IPv4, CIDR, TCP, UDP, ports, NAT, routing, localhost.', 'Уязвимости и защита всегда живут в реальном сетевом контексте.'],
    ['network-services', 'Networking: DNS, TLS и сетевые инструменты', 'DNS, DHCP, firewall, proxy, VPN, TLS basics; ping, ss, dig, tcpdump, Wireshark, nmap.', 'Позволяет читать путь и поведение запроса, а не угадывать.']]],
  ['web', 'WEB INTERNALS', 'WEB', [
    ['http', 'HTTP Request и Response', 'Methods, headers, body, query parameters, status codes, Content-Type, caching и redirects.', 'Почти каждая web-проверка начинается с понимания HTTP.'],
    ['web-browser', 'Browser и Web Platform', 'HTML, forms, JavaScript, DOM, fetch, XHR, localStorage, sessionStorage и cookies.', 'Нужно знать, что именно делает браузер и где проходит граница origin.'],
    ['sop-cors', 'Same-Origin Policy и CORS', 'Модель origin, browser restrictions, CORS headers и preflight.', 'Критично для проверки доступа к данным из браузера.'],
    ['backend', 'Backend, REST и идентификация', 'Browser → server → backend → database, REST API, JSON, reverse proxy, authentication, authorization, session, bearer token, JWT basics.', 'Создаёт карту обычного web-приложения до поиска проблем.']]],
  ['websec1', 'WEB SECURITY I', 'WEB SECURITY', [
    ['sqli', 'SQL Injection', 'Внедрение управляющих фрагментов в SQL-запрос через недоверенный ввод.', 'Одна из ключевых уязвимостей для code review и web testing.'],
    ['command-injection', 'Command Injection', 'Передача пользовательского ввода в системную команду.', 'Позволяет узнавать опасные execution sinks.'],
    ['path-traversal', 'Path Traversal', 'Выход за пределы разрешённого пути через элементы path.', 'Частая ошибка при работе с файлами и архивами.'],
    ['file-upload', 'File Upload vulnerabilities', 'Опасные типы, пути, имена файлов, обработчики и выдача загруженного контента.', 'Загрузка файлов часто пересекает несколько trust boundaries.'],
    ['auth-vulns', 'Authentication и Session vulnerabilities', 'Password security, enumeration, reset flows, fixation и управление сессией.', 'Идентичность пользователя — основа большинства решений доступа.'],
    ['info-disclosure', 'Information Disclosure', 'Leaks через ошибки, headers, endpoints, backups и metadata.', 'Небольшая утечка часто становится шагом к серьёзной атаке.']]],
  ['websec2', 'WEB SECURITY II', 'WEB SECURITY', [
    ['xss', 'XSS: Reflected, Stored и DOM', 'Инъекция исполняемого контента в браузер; контексты и dangerous sinks.', 'Помогает безопасно работать с данными, которые попадут в UI.'],
    ['csrf', 'CSRF', 'Нежелательное действие от имени уже авторизованного пользователя.', 'Нужно отличать защиту сессии, origin и anti-CSRF механизмы.'],
    ['csp', 'Content Security Policy', 'Политика источников и ограничения на выполнение контента.', 'CSP — важный compensating control против XSS.'],
    ['idor', 'Access Control, IDOR и BAC', 'Object-level и function-level authorization, Broken Access Control.', 'Это один из наиболее распространённых классов проблем в приложениях.'],
    ['business-logic', 'Business Logic vulnerabilities', 'Обход ограничений и неверные предположения в бизнес-процессах.', 'Не все риски находят сканеры: нужно понимать продукт.']]],
  ['advanced', 'ADVANCED WEB', 'WEB SECURITY', [
    ['ssrf', 'SSRF', 'Сервер совершает запрос к адресу, контролируемому пользователем.', 'Позволяет проверять trust boundaries и доступ к внутренним сервисам.'],
    ['xxe', 'XXE', 'Обработка XML с внешними сущностями и связанными рисками.', 'Полезно узнавать legacy-интеграции и безопасные настройки parser.'],
    ['ssti', 'SSTI', 'Инъекция в шаблонный движок на стороне сервера.', 'Помогает распознавать опасную генерацию представлений.'],
    ['deserialization', 'Insecure Deserialization', 'Небезопасное восстановление сложных объектов из данных.', 'Связывает data formats, integrity и execution risks.'],
    ['jwt-oauth', 'JWT и OAuth vulnerabilities', 'Проверка токенов, алгоритмов, redirect URI, scopes и flows.', 'Современные системы часто строят доступ поверх токенов и OAuth.'],
    ['api-advanced', 'WebSockets, Race Conditions, Smuggling, NoSQL и GraphQL', 'Продвинутые протоколы и классы рисков без требования экспертности по smuggling.', 'Расширяет модель атаки за пределы обычного REST.']]],
  ['code', 'CODE', 'CODE', [
    ['python', 'Python для security automation', 'Variables, collections, functions, exceptions, files, requests, JSON, regex, CLI и classes basics.', 'Позволяет автоматизировать маленькие, полезные и безопасные проверки.'],
    ['javascript', 'JavaScript и browser sinks', 'Functions, objects, promises, async/await, fetch, DOM, innerHTML, document.cookie, URL, postMessage, eval.', 'Нужно для анализа frontend-кода и DOM XSS.'],
    ['sql', 'SQL и prepared statements', 'SELECT, WHERE, JOIN, INSERT, UPDATE, DELETE, transactions и parameterized queries.', 'Помогает увидеть SQLi и корректно объяснить её fix.']]],
  ['secure-code', 'SECURE CODING & CODE REVIEW', 'SECURE CODING', [
    ['validation', 'Input validation, output encoding и sanitization', 'Границы данных и подходящие меры для разных контекстов.', 'Это фундамент устойчивого к уязвимостям кода.'],
    ['secure-auth', 'Secure authentication и session management', 'Password hashing, secrets, authentication, authorization и sessions.', 'Нужно превращать требования безопасности в кодовые решения.'],
    ['secure-platform', 'Защита файлов, SSRF, CORS, CSRF и crypto basics', 'Безопасные настройки и типичные защитные паттерны.', 'Собирает практические fixes в общий инженерный набор.'],
    ['source-sink', 'SOURCE → SINK', 'Untrusted input, source, data flow, dangerous sink, validation и sanitization.', 'Это язык ручного code review и SAST.']]],
  ['toolchain', 'APPSEC TOOLCHAIN', 'APPSEC', [
    ['sast', 'SAST: Semgrep, CodeQL и правила', 'False/true positives, source/sink analysis, Semgrep rules, CodeQL basics и SonarQube conceptually.', 'Позволяет внедрять анализ кода осмысленно, а не ради галочки.'],
    ['sca', 'SCA, CVE, CWE и CVSS', 'Dependencies, transitive dependencies и vulnerable packages.', 'Риск приходит не только из собственного исходного кода.'],
    ['sbom', 'SBOM: CycloneDX и SPDX', 'Состав ПО и назначение Software Bill of Materials.', 'SBOM помогает отвечать, что именно поставляется в продукте.'],
    ['secrets', 'Secret scanning', 'API keys, passwords, private keys и credentials в Git.', 'Предотвращает один из самых дорогих и простых классов утечек.'],
    ['dast', 'DAST: OWASP ZAP и Burp', 'Manual testing и automated DAST, их сильные и слабые стороны.', 'Инструменты должны дополнять ручную проверку, не заменять её.']]],
  ['devsecops', 'CI/CD & CONTAINERS', 'DEVSECOPS', [
    ['cicd', 'CI/CD security pipeline', 'Pipeline, job, stage, runner, artifact, environment, secret, build, test и deploy.', 'Здесь безопасность становится повторяемой частью поставки.'],
    ['github-actions', 'GitHub Actions', 'Workflow, triggers, permissions, secrets, artifacts и security checks.', 'Один освоенный CI даст практическую основу для DevSecOps.'],
    ['docker', 'Docker и container security', 'Image, container, Dockerfile, registry, volumes, network, layers, root, capabilities и exposed services.', 'Контейнеры часто являются фактическим runtime приложений.']]],
  ['architecture', 'THREAT MODELING & SSDLC', 'ARCHITECTURE', [
    ['threat-modeling', 'Threat Modeling и STRIDE', 'Assets, entry points, trust boundaries, DFD, attack surface, abuse cases, threats и mitigations.', 'Помогает находить риски до того, как они станут кодом.'],
    ['ssdlc', 'Secure SDLC', 'Security requirements, design, development, testing, deployment, operations и vulnerability management.', 'Связывает AppSec-практики с жизненным циклом продукта.'],
    ['asvs-samm', 'OWASP ASVS 5 и SAMM', 'ASVS как каталог проверяемых требований, SAMM как модель зрелости.', 'Это ориентиры для разговора с командами и оценки практик.']]],
  ['api-supply', 'API & SUPPLY CHAIN', 'APPSEC', [
    ['api-security', 'API Security', 'REST, OpenAPI, auth, object/function-level authorization, mass assignment, rate limiting, inventory и GraphQL.', 'API часто являются главным интерфейсом продукта и его данных.'],
    ['supply-chain', 'Software Supply Chain', 'Package managers, lock files, dependency confusion, provenance и artifact integrity.', 'Позволяет оценивать риск за пределами репозитория приложения.']]],
  ['capstone', 'APPSEC ENGINEER CAPSTONE', 'ARCHITECTURE', [
    ['capstone', 'Полный AppSec assessment', 'Architecture, DFD, threat model, requirements, manual testing, code review, SAST/SCA, SBOM, CI/CD, Docker и report.', 'Итоговый цикл DESIGN → CODE → TEST → FIX → AUTOMATE.']]]
];

const subtopicPlans: Record<string, Array<[string, string]>> = {
  http: [['request-line', 'Строка запроса и HTTP methods'], ['headers', 'Headers: Host, Content-Type, Authorization'], ['cookies', 'Cookies, атрибуты Secure и HttpOnly'], ['responses', 'Status codes, redirects и caching']],
  'web-browser': [['dom', 'DOM и обработка пользовательского ввода'], ['storage', 'localStorage, sessionStorage и cookies'], ['fetch', 'fetch/XHR и жизненный цикл запроса'], ['forms', 'HTML forms и serialisation данных']],
  'sop-cors': [['origin', 'Origin и границы Same-Origin Policy'], ['preflight', 'Preflight request и Access-Control headers'], ['credentials', 'CORS с credentials и риски wildcard']],
  backend: [['authn-authz', 'Authentication vs authorization'], ['sessions', 'Session, bearer token и JWT'], ['api-flow', 'Путь запроса: proxy → backend → database']],
  sqli: [['sqli-detection', 'Признаки SQLi в параметрах и ошибках'], ['sqli-impact', 'Impact: чтение, изменение и обход доступа'], ['sqli-fix', 'Prepared statements и parameterized queries'], ['sqli-code-review', 'SQL sinks в исходном коде']],
  'command-injection': [['command-sinks', 'Опасные вызовы shell и process execution'], ['argument-injection', 'Argument injection и безопасные API'], ['command-fix', 'Allowlist и отказ от shell-интерполяции']],
  'path-traversal': [['path-input', 'Нормализация пути и user-controlled filename'], ['path-bypass', 'Кодировки, absolute path и обходы'], ['path-fix', 'Allowlist, canonical path и безопасная выдача файлов']],
  'file-upload': [['upload-validation', 'Проверка type, size и content'], ['upload-storage', 'Изоляция хранилища и случайные имена'], ['upload-serving', 'Безопасная раздача загруженных файлов']],
  'auth-vulns': [['password-policy', 'Хранение паролей и password hashing'], ['login-flows', 'Login, reset и account enumeration'], ['session-security', 'Session fixation, expiration и logout']],
  xss: [['xss-contexts', 'HTML, attribute, JavaScript и URL contexts'], ['xss-sinks', 'innerHTML, DOM sinks и client-side templates'], ['xss-fix', 'Output encoding, sanitization и CSP']],
  csrf: [['csrf-model', 'Почему cookie-сессия допускает CSRF'], ['csrf-controls', 'CSRF token, SameSite и origin checks'], ['csrf-testing', 'Проверка защищённости state-changing requests']],
  idor: [['object-authorization', 'Проверка доступа к объекту на сервере'], ['function-authorization', 'Права на действие и привилегии'], ['idor-testing', 'Подмена идентификаторов и negative tests']],
  'business-logic': [['workflow', 'Инварианты бизнес-процесса'], ['race', 'Повтор операций и конкурирующие запросы'], ['abuse-cases', 'Abuse cases и ограничения продукта']],
  ssrf: [['ssrf-entry', 'URL input и server-side request sinks'], ['ssrf-targets', 'Internal services, metadata и DNS'], ['ssrf-fix', 'Allowlist, DNS validation и egress controls']],
  xxe: [['xml-parser', 'Опасные настройки XML parser'], ['entity-impact', 'External entity, file read и SSRF'], ['xxe-fix', 'Отключение DTD и безопасные parser settings']],
  ssti: [['template-sinks', 'Шаблонные движки и template expressions'], ['ssti-detection', 'Безопасная диагностика в лаборатории'], ['ssti-fix', 'Разделение шаблона и данных']],
  'jwt-oauth': [['jwt-validation', 'Подпись, algorithm, exp, aud и iss'], ['oauth-flow', 'Authorization Code, redirect URI и PKCE'], ['oauth-scopes', 'Scopes, consent и token storage']],
  python: [['python-http', 'requests, timeout и обработка HTTP response'], ['python-parsing', 'JSON, regex и безопасный parsing'], ['python-cli', 'CLI arguments, files и logging']],
  javascript: [['js-dom', 'DOM API и dangerous sinks'], ['js-async', 'Promises, async/await и fetch'], ['js-browser-security', 'postMessage, cookies и storage']],
  sql: [['sql-queries', 'SELECT, WHERE и JOIN'], ['sql-writes', 'INSERT, UPDATE, DELETE и transactions'], ['sql-parameters', 'Prepared statements на практике']],
  validation: [['input-validation', 'Allowlist, type, length и canonicalization'], ['output-encoding', 'Кодирование данных по контексту'], ['sanitization', 'Когда sanitization уместна, а когда нет']],
  'secure-auth': [['passwords', 'Argon2/bcrypt, reset и MFA concepts'], ['authorization-design', 'Server-side authorization checks'], ['session-controls', 'Cookie flags, rotation и timeouts']],
  'source-sink': [['sources', 'Источники недоверенных данных'], ['data-flow', 'Трассировка data flow между функциями'], ['sinks', 'SQL, shell, filesystem и DOM sinks']],
  sast: [['sast-triage', 'True positive, false positive и приоритизация'], ['semgrep-rules', 'Структура простого Semgrep rule'], ['codeql-basics', 'Query, database и taint tracking']],
  sca: [['dependency-inventory', 'Direct и transitive dependencies'], ['vuln-triage', 'CVE, CWE, CVSS и exploitability'], ['remediation', 'Update, patch, compensate и accept risk']],
  secrets: [['secret-types', 'API keys, tokens, private keys и passwords'], ['git-history', 'Secrets в commit history и rotation'], ['secret-controls', 'Pre-commit checks и CI scanning']],
  dast: [['proxy-workflow', 'Proxy, scope и manual testing flow'], ['zap-scan', 'Что автоматический DAST находит и не находит'], ['finding-validation', 'Подтверждение находки перед отчётом']],
  cicd: [['pipeline-security', 'SAST, SCA, secret scan и artifact checks'], ['ci-permissions', 'Права токенов, secrets и runner trust'], ['security-gates', 'Пороговые проверки и работа с исключениями']],
  docker: [['dockerfile', 'Base image, layers, user и COPY'], ['container-runtime', 'Capabilities, privileged и exposed ports'], ['image-supply-chain', 'Registry, scanning и pinning versions']],
  'threat-modeling': [['dfd', 'Data Flow Diagram и trust boundaries'], ['stride', 'STRIDE по компонентам и потокам'], ['mitigations', 'Связь угроз, controls и security requirements']],
  ssdlc: [['requirements', 'Security requirements и abuse cases'], ['design-review', 'Design review и threat modeling'], ['release-controls', 'Security checks до и после deploy']],
  'api-security': [['api-authz', 'Object-level и function-level authorization'], ['api-input', 'Mass assignment и schema validation'], ['api-resilience', 'Rate limiting, pagination и resource consumption']],
  'supply-chain': [['package-selection', 'Lock files и доверие к package source'], ['provenance', 'Provenance, signing и artifact integrity'], ['sbom-usage', 'Использование SBOM при инциденте']],
  capstone: [['architecture-assessment', 'Архитектура, assets и DFD'], ['testing-assessment', 'Manual testing и code review'], ['automation-assessment', 'SAST, SCA, SBOM и pipeline'], ['reporting-assessment', 'Finding, severity, fix и re-test']]
};
const defaultSubtopics = (title: string): Array<[string, string]> => [['concept', `Модель и терминология: ${title}`], ['practice', `Практическая работа: ${title}`], ['review', `Самопроверка и безопасный подход: ${title}`]].map(([suffix, description]) => [suffix, description] as [string, string]);

const sharedQuestions: Record<string, string[]> = {
  sqli: ['Почему возникает SQL Injection?', 'Что такое parameterized query?', 'Почему prepared statements надёжнее escaping?', 'Какой impact возможен?'],
  ssrf: ['Что делает SSRF?', 'Почему внутренние адреса особенно чувствительны?', 'Какие защиты работают на уровне приложения и сети?'],
  'sop-cors': ['Что ограничивает Same-Origin Policy?', 'Когда браузер выполняет preflight?', 'Почему CORS — не механизм авторизации?'],
  'network-services': ['Что делает DNS?', 'Чем A отличается от CNAME?', 'Чем recursive resolver отличается от authoritative DNS?', 'Что происходит после ввода домена в браузер?']
};

export const topics: RoadmapTopic[] = seeds.flatMap(([stageId, _title, area, rows]) => rows.map(([id, title, description, why]) => ({ id, title, description, why, stageId, area, practice: stageId.startsWith('websec') || stageId === 'advanced' ? ['Пройти релевантную лабораторию в PortSwigger Web Security Academy.', 'Записать наблюдения и безопасный способ исправления.'] : [], questions: sharedQuestions[id] ?? ['Что это?', 'Зачем это AppSec-инженеру?', 'Как проявляется типичная ошибка?', 'Как бы ты объяснил это без технического жаргона?'], subtopics: (subtopicPlans[id] ?? defaultSubtopics(title)).map(([suffix, subtopicDescription]) => ({ id: `${id}--${suffix}`, title: subtopicDescription.split(': ').at(-1) ?? subtopicDescription, description: subtopicDescription })) })));

const stageDescription: Record<string, string> = {
  system: 'Инженерный фундамент: операционная система и сеть.', web: 'Как устроено web-приложение до начала security testing.', websec1: 'Базовые уязвимости и безопасная практика на лабораториях.', websec2: 'Browser security и контроль доступа.', advanced: 'Расширение модели web-атак.', code: 'Код для понимания и безопасной автоматизации.', 'secure-code': 'Переход от finding к понятному fix.', toolchain: 'Инструменты AppSec и их роль в процессе.', devsecops: 'Встраивание проверок в поставку.', architecture: 'Риски на уровне дизайна и жизненного цикла.', 'api-supply': 'Безопасность API и цепочки поставки.', capstone: 'Собери полный инженерный AppSec lifecycle.'
};
export const stages: RoadmapStage[] = seeds.map(([id, title, _area, rows], index) => ({ id, number: String(index + 1).padStart(2, '0'), title, month: index + 1, description: stageDescription[id], topicIds: rows.map(([topicId]) => topicId), checkpoint: id === 'system' ? ['Объясняю путь запроса от браузера до HTTP-сервера.', 'Уверенно работаю с базовыми сетевыми инструментами.'] : id === 'web' ? ['Объясняю HTTP request и cookie.', 'Отличаю authentication от authorization.', 'Могу разобрать запрос в proxy.'] : [`Могу объяснить основные темы этапа ${String(index + 1).padStart(2, '0')}.`, 'Сделал хотя бы одно практическое задание и записал выводы.'] }));

type ResourceSeed = [string, string, Resource['type'], Resource['language'], string, string, string[]];
export const resources: Resource[] = ([
  ['portswigger', 'PortSwigger Web Security Academy', 'Практика', 'EN', 'https://portswigger.net/web-security', 'Бесплатные интерактивные лаборатории по web security.', ['sqli','xss','csrf','idor','ssrf','xxe','ssti','jwt-oauth','api-advanced']],
  ['top10', 'OWASP Top 10:2025', 'Справочник', 'EN', 'https://owasp.org/www-project-top-ten/', 'Основной ориентир по критическим web-рискам.', ['sqli','auth-vulns','xss','idor','ssrf']],
  ['wstg', 'OWASP Web Security Testing Guide', 'Справочник', 'EN', 'https://owasp.org/www-project-web-security-testing-guide/', 'Методика тестирования web-приложений.', ['http','sqli','xss','idor','api-security']],
  ['cheatsheets', 'OWASP Cheat Sheet Series', 'Справочник', 'EN', 'https://cheatsheetseries.owasp.org/', 'Практические рекомендации для secure coding.', ['validation','secure-auth','secure-platform','sqli','csrf']],
  ['juice', 'OWASP Juice Shop', 'Практика', 'EN', 'https://owasp.org/www-project-juice-shop/', 'Учебное уязвимое web-приложение.', ['sqli','xss','idor','business-logic']],
  ['webgoat', 'OWASP WebGoat', 'Практика', 'EN', 'https://owasp.org/www-project-webgoat/', 'Интерактивная учебная среда OWASP.', ['sqli','xss','csrf','auth-vulns']],
  ['dvwa', 'Damn Vulnerable Web Application', 'Практика', 'EN', 'https://github.com/digininja/DVWA', 'Локальная среда для практики базовых web-уязвимостей.', ['sqli','xss','file-upload']],
  ['asvs', 'OWASP ASVS 5.0', 'Справочник', 'EN', 'https://owasp.org/www-project-application-security-verification-standard/', 'Проверяемые требования безопасности приложений.', ['asvs-samm','ssdlc','secure-auth']],
  ['samm', 'OWASP SAMM', 'Справочник', 'EN', 'https://owasp.org/www-project-samm/', 'Модель зрелости security-практик.', ['asvs-samm','ssdlc']],
  ['api-top10', 'OWASP API Security Top 10', 'Справочник', 'EN', 'https://owasp.org/www-project-api-security/', 'Ориентир по рискам API.', ['api-security','idor']],
  ['semgrep', 'Semgrep Documentation', 'Основной материал', 'EN', 'https://semgrep.dev/docs/', 'Документация SAST и создания правил.', ['sast','source-sink']],
  ['codeql', 'CodeQL Documentation', 'Основной материал', 'EN', 'https://codeql.github.com/docs/', 'Официальная документация CodeQL.', ['sast']],
  ['actions', 'GitHub Actions Documentation', 'Основной материал', 'EN', 'https://docs.github.com/actions', 'Документация по CI/CD workflows.', ['cicd','github-actions']],
  ['docker-docs', 'Docker Documentation', 'Основной материал', 'EN', 'https://docs.docker.com/', 'Официальная документация Docker.', ['docker']],
  ['mdn-http', 'MDN Web Docs', 'Основной материал', 'RU', 'https://developer.mozilla.org/ru/', 'Справочник по HTTP, JavaScript и web platform.', ['http','web-browser','sop-cors','javascript']],
  ['python-docs', 'Python Tutorial', 'Основной материал', 'EN', 'https://docs.python.org/3/tutorial/', 'Официальный учебник Python.', ['python']]
] satisfies ResourceSeed[]).map(([id, title, type, language, url, description, relatedTopicIds]) => ({ id, title, type, language, free: true, url, description, relatedTopicIds }));

export const topicById = Object.fromEntries(topics.map(topic => [topic.id, topic]));
export const subtopicById = Object.fromEntries(topics.flatMap(topic => topic.subtopics.map(subtopic => [subtopic.id, { ...subtopic, topicId: topic.id }])));
