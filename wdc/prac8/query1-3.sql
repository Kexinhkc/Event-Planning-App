SELECT customer.first_name,customer.last_name,MIN(rental_date)
FROM rental
INNER JOIN customer
ON rental.customer_id=customer.customer_id;



 name of the person with the longest standing current rental, not yet return
