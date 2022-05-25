SELECT first_name,last_name,MIN(rental_date)
FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
GROUP BY rental.customer_id
WHERE MIN(rental_date);
ORDER BY rental_date DESC
WHERE ROWNUM = 1;



 name of the person with the longest standing current rental, not yet return
