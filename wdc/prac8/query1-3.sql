SELECT customer_id,MAX(TIMESTAMPDIFF(MINUTE,rental_date,return_date))
FROM rental;


DATEDIFF(r.return_date,r.rental_date)

SELECT rental_date,return_date
FROM rental
LIMIT 100,100;

 name of the person with the longest standing current rental, not yet return
