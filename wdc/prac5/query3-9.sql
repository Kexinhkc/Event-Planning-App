find out subjects code he studied
join the table with subjects, get teacher_id
join the table with teachers table, get name

SELECT Teachers.staff_id, Teachers.given_name, Teachers.family_name FROM Enrolments
INNER JOIN Subjects
ON Enrolments.student_id = Subjects.student_id
WHERE student_id='a1111113';