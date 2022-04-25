find out subjects code he studied
join the table with subjects, get teacher_id
join the table with teachers table, get name

SELECT Teachers.staff_id, Teachers.given_name, Teachers.family_name FROM Enrolments
INNER JOIN Subjects
ON Enrolments.subject_code = Subjects.subject_code
WHERE student_id='a1111113'
INNER JOIN Teachers
ON Subjects.teacher_id=Teachers.staff_id
;

