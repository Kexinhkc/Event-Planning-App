street number/name
street addresses(s) of stores that have a copy of the film TWISTED PIRATES in their inventory

select film_id
FROM film
WHERE title = 'TWISTED PIRATES';

From inventory AS i
INNER JOIN address AS a