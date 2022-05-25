SELECT customer_id,MAX(TIMESTAMPDIFF(MINUTE,rental_date,return_date))
FROM rental;

SELECT first_name,last_name, rental_date
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
WHERE return_date IS NULL
ORDER BY rental_date ASC
LIMIT 1
;

