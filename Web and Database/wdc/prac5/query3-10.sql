SELECT Students.given_name,Students.family_name,Students.program,Subjects.subject,Subjects.faculty
FROM Enrolments
INNER JOIN Subjects
ON Enrolments.subject_code=Subjects.subject_code
INNER JOIN Students
ON Students.student_id=Enrolments.student_id
WHERE Subjects.Subject_code ='PHIL 2039' OR Subjects.Subject_code ='ENTREP 1011' OR Subjects.Subject_code ='BIOCHEM 2500'
;

