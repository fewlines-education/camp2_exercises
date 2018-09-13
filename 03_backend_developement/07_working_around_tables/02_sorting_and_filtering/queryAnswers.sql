--Exercice1
SELECT concat(first_name,' ',last_name) AS full_name
FROM employees
WHERE salary < 6000
;

--Exercice3 + combination
SELECT e.first_name, e.last_name, d.name
FROM employees e
INNER JOIN departments d ON (e.departement_id = d.id)
WHERE e.last_name = 'McEwen'
;

--Exercice5
SELECT *
FROM departments d
WHERE d.name = 'Marketing'
;

--Exercice7
SELECT *
FROM employees
WHERE (salary>8000 AND salary<12000) AND (commission_pct != null OR (departement_id != 4 AND departement_id != 12 AND departement_id != 7 AND hire_date < '2005-06-05'))
;

--Exercice9
SELECT concat(first_name,' ',last_name) AS full_name, concat (phone_number,'-',email) AS Contact_Details, salary AS Remunaration
FROM employees
WHERE salary between 9000 and 17000
;

--Exercice11
SELECT concat(first_name,' ',last_name) AS full_name, salary AS Remunaration
from employees
WHERE salary not between 7000 and 15000
ORDER BY full_name ASC
;

--Exercice13
SELECT concat(first_name,' ',last_name), departement_id
FROM employees
WHERE departement_id = 7 OR departement_id = 9
;

--Exercice15
SELECT *
from employees
WHERE hire_date < '2002-06-21'
;

--Exercice17
SELECT *
FROM employees
WHERE first_name LIKE '%d%' OR first_name LIKE '%n%' OR first_name LIKE '%s%'
;

--Exercice19
SELECT concat(first_name,' ',last_name), departement_id
FROM employees
WHERE first_name LIKE '__s%'
;

--Exercice21
SELECT id, first_name, job_id, departement_id
FROM employees
WHERE departement_id = 3 OR departement_id = 4 OR departement_id = 7
;

--Exercice23
SELECT job_id, COUNT(first_name) AS Nb_Employees, sum(salary) AS Total_sum, (max(salary)-min(salary)) AS dif_salary
FROM employees
GROUP BY job_id
ORDER BY job_id ASC
;

--Exercice25
SELECT country_id, COUNT(city) AS Nb_cities
FROM locations
GROUP BY country_id
ORDER BY country_id ASC
;

--Exercice27
SELECT *
FROM jobs
ORDER BY title desc
;

--Exercice29
SELECT departement_id, avg(salary)
FROM employees
WHERE commission_pct = 0
GROUP BY departement_id
ORDER BY departement_id
;

--Exercice31
SELECT departement_id, g.nb
FROM (
	select departement_id, count(1) as nb
	FROM employees
	WHERE  commission_pct = 0
	group by departement_id
	) as g
WHERE g.nb > 10
ORDER BY departement_id
;
