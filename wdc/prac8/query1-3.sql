SELECT first_name,last_name,rental_date
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
GROUP BY rental.customer_id
HAVING rental.rental_date= MAX(rental_date);


 name of the person with the longest standing current rental, not yet return
