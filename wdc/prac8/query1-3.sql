SELECT first_name,last_name,rental_date
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id;

//first name,last name, rental_date