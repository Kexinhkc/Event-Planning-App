SELECT customer_id,MAX(TIMESTAMPDIFF(MINUTE,rental_date,return_date))
FROM rental;


DATEDIFF(r.return_date,r.rental_date)

SELECT customer_id,MAX(TIMESTAMPDIFF(MINUTE,rental_date,return_date))
FROM rental;

 name of the person with the longest standing current rental, not yet return
