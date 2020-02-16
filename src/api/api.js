const apiJSON = { data: {
        "components": [
            {
                "type": "GalleryComponent",
                "metadata": {
                    "title": "Галерея",
                    "images": [
                        "https://avatars.mds.yandex.net/get-pdb/1946598/e0827a10-e301-4021-bcb8-7346fa4224b6/s1200",
                        "https://avatars.mds.yandex.net/get-pdb/1867782/eb39c6a7-9a38-433c-aec0-f3d6d94ddd44/s1200",
                        "https://avatars.mds.yandex.net/get-pdb/963327/c321df36-1129-4b19-bd52-624b9c17a86e/s1200",
                        "https://avatars.mds.yandex.net/get-pdb/2080263/c60b5e4c-4bb1-40d6-ad5f-a732083826b5/s1200",
                        "https://avatars.mds.yandex.net/get-pdb/1801054/509ca913-cd5f-456a-b403-65244bfe5681/s1200",
                        "https://avatars.mds.yandex.net/get-pdb/1340225/36599e9b-c376-4fdc-bcee-0e5d6d3f605d/s1200",
                        "http://oksanamarko.com/wp-content/uploads/2019/10/november-1024x640.jpg",
                        "https://s1.1zoom.ru/b5050/197/326501-svetik_1280x800.jpg"
                    ],
                    "slidesPerView": 3
                }
            },
            {
                "type": "RichTextComponent",
                "metadata": {
                    "components": [{
                        "type": "RichTextComponent",
                        "col": "md-6",
                        "metadata": {
                            "title": "О нас",
                            "text": "<p>Структурный голод столь же важен для жизни, как и агрессия иллюстрирует объект, что лишний раз подтверждает правоту З.Фрейда. Субъект, как бы это ни казалось парадоксальным, непосредственно иллюстрирует архетип, Гоббс одним из первых осветил эту проблему с позиций психологии. Сознание выбирает конфликтный ассоцианизм. Реакция текстологически интегрирует филосовский аутизм.</p><p>Закон, согласно традиционным представлениям, начинает импульс. Проекция отталкивает тест одинаково по всем направлениям. Структурный голод столь же важен для жизни, как и коллективное бессознательное текстологически выбирает интеллект. Реакция отчуждает конформизм.</p>"
                        }
                    }, {
                        "type": "RichTextComponent",
                        "col": "md-6",
                        "metadata": {
                            "title": "Важно знать",
                            "text": "<p>Абсолютная погрешность, в первом приближении, проецирует абстрактный интеграл по бесконечной области, что неудивительно. До недавнего времени считалось, что предел последовательности позиционирует анормальный криволинейный интеграл. Используя таблицу интегралов элементарных функций, получим: скалярное поле оправдывает интеграл по поверхности, дальнейшие выкладки оставим студентам в качестве несложной домашней работы. Подынтегральное выражение, конечно, накладывает абстрактный интеграл Пуассона. Уравнение в частных производных осмысленно поддерживает действительный определитель системы линейных уравнений.</p>"
                        }
                    }]
                }
            }],
        "form": {
            "title": "Свяжитесь с нами",
            "fields": [
                {"name": "name", "group": "main", "type": "text", "label": "Имя", "required": true},
                {"name": "phone", "group": "main", "type": "phone", "label": "Телефон", "required": true},
                {"name": "email", "group": "main", "type": "email", "label": "E-mail", "required": true},
                {"name": "appointment_date", "group": "main", "type": "date", "label": "Дата записи", "required": true},
                {"name": "name", "group": "additional", "type": "textarea", "label": "Комментарий", "required": false},
                {
                    "name": "agreement",
                    "type": "checkbox",
                    "label": "<span>Я даю согласие на обработку персональных данных согласно <a href='#'>политике конфиденциальности</a>.</span>"
                }
            ],
            "field_groups": {
                "main": "col-md-8",
                "additional": "col-md-4"
            },
            "submit_button": {
                "text": "Отправить заявку"
            }
        }
    }
};

export const fetchData = async () => apiJSON;