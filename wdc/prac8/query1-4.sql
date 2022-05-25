street number/name
street addresses(s) of stores that have a copy of the film TWISTED PIRATES in their inventory

select film_id
FROM film
WHERE title = 'TWISTED PIRATES';

select address
From inventory AS i
INNER JOIN store AS s
ON i.store_id = s.store_id
INNER JOIN address AS a
ON s.address_id=a.address_id
WHERE film_id = 918
LIMIT 1;
;


select address
FROM address
LIMIT 50;