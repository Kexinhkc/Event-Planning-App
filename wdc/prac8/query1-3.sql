SELECT customer_id,MAX(TIMESTAMPDIFF(MINUTE,rental_date,return_date))
FROM rental;

SELECT rental_date
FROM rental
WHERE return_date = NULL
;

