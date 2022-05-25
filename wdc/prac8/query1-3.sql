SELECT DATEDIFF()
FROM rental
INNER JOIN customer
ON rental.customer_id=customer.customer_id;



 name of the person with the longest standing current rental, not yet return
