-- Task 3: Count Orders by Staff Member
-- Write a query to find the total number of orders processed by each staff member. 
-- The result should show the staff member's full name (concatenated) and their total order count, ordered by the count in descending order.

SELECT
    s.first_name ||' '|| s.last_name as full_name,
    COUNT(o.order_id) as total_orders
FROM staff as s
join orders as o
    ON s.staff_id = o.staff_id
GROUP BY s.staff_id
ORDER BY total_orders DESC;


-- Thinking Process:
-- 1. เลือกคอลัมน์ first_name และ last_name จากตาราง staff และรวมกันเป็น full_name
-- 2. นับจำนวน order_id จากตาราง orders เพื่อหาจำนวนคำสั่งที่แต่ละพนักงานประมวลผล
-- 3. ใช้ JOIN เพื่อเชื่อมตาราง staff และ orders ผ่าน staff_id
-- 4. ใช้ GROUP BY เพื่อจัดกลุ่มผลลัพธ์ตาม staff_id
-- 5. ใช้ ORDER BY เพื่อเรียงลำดับผลลัพธ์ตาม total_orders ในลำดับจากมากไปน้อย
