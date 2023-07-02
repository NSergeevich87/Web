-- create
CREATE TABLE EMPLOYEE (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
age TEXT NOT NULL,
address TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Алевтина', '18', 'Москва');
INSERT INTO EMPLOYEE VALUES (0002, 'Хулио', '22', 'Иваново');
INSERT INTO EMPLOYEE VALUES (0003, 'Тома', '35', 'Питер');
INSERT INTO EMPLOYEE VALUES (0004, 'Людмила', '19', 'Москва');
INSERT INTO EMPLOYEE VALUES (0005, 'Ксения', '36', 'Москва');
INSERT INTO EMPLOYEE VALUES (0006, 'Иван', '33', 'Москва');
INSERT INTO EMPLOYEE VALUES (0007, 'Петр', '25', 'Иваново');
INSERT INTO EMPLOYEE VALUES (0008, 'Анна', '31', 'Питер');
INSERT INTO EMPLOYEE VALUES (0009, 'Юлия', '17', 'Москва');
INSERT INTO EMPLOYEE VALUES (0010, 'Николай', '39', 'Москва');

-- Необходимо написать запрос на получение имен всех одногруппников (только имен, без всего остального), 
-- которые живут в Москве и их возраст находится в диапазоне [18, 30) лет.

-- fetch 
SELECT id, name AS имя 
FROM EMPLOYEE 
WHERE (address = 'Москва' AND age >= 18 AND age < 30) -- AND name LIKE '%а%') 
-- OR (name = 'Анна') 
ORDER BY name ASC 
-- DESC (в обратном порядке)
;