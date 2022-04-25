for each student taking one or more subjects outside of the ECMS faculty, lists the student's name (given, family), the student's program/degree, the name of the subject, and which faculty the subject is run by.

SELECT Students.given_name,Students.family_name,Students.program,Subjects.subject,Subjects.faculty
FROM Students
INNER JOIN Enrolments
ON Students.student_id=Enrolments.student_id
INNER JOIN Subjects
ON Subjects.