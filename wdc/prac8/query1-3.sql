SELECT first_name,last_name,rental_date
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
WHERE rental.rental_date = MAX(rental_date);

