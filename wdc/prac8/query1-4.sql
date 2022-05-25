street number/name
street addresses(s) of stores that have a copy of the film TWISTED PIRATES in their inventory

select film_id
FROM film
WHERE title = 'TWISTED PIRATES';

select *
From inventory AS i
INNER JOIN store AS s
ON i.store_id = s.store_id
WHERE film_id = 918;
INNER JOIN address AS a
ON i.addre

select address
FROM address
LIMIT 50;