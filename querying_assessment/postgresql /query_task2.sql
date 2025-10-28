-- Task 2: Find Staff by Role
-- Write a query to list the first_name and last_name of all staff members whose role is 'Cook'.

SELECT first_name, last_name, role
FROM Staff
WHERE role = 'Cook';

-- Thinking Process:
-- 1. เลือกคอลัมน์ first_name, last_name, และ role จากตาราง Staff
-- 2. ใช้เงื่อนไข WHERE เพื่อกรองเฉพาะพนักงานที่มีบทบาทเป็น 'Cook'