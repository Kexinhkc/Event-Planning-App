SELECT customer_id,MAX(TIMESTAMPDIFF(MINUTE,rental_date,return_date))
FROM rental;

SELECT first_name,last_name, rental_date
FROM rental
WHERE return_date = null
;

