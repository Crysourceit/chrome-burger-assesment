-- Task 4: Find Ingredients by Supplier
-- Write a query to find the names of all ingredients supplied by 'Freshest Farm Produce'.

SELECT
    ing.name as ingredient_name,
    s.name as supplier_name
FROM suppliers as s
join ingredients as ing
    on s.supplier_id = ing.supplier_id
WHERE s.name = 'Freshest Farm Produce';

-- Thinking Process:
-- 1. เลือกคอลัมน์ name จากตาราง ingredients และ suppliers
-- 2. ใช้ JOIN เพื่อเชื่อมตาราง suppliers และ ingredients ผ่าน supplier_id
-- 3. ใช้ WHERE เพื่อกรองเฉพาะซัพพลายเออร์ที่ชื่อ 'Freshest Farm Produce'
-- 4. แสดงผลลัพธ์เป็นชื่อวัตถุดิบและชื่อซัพพลายเออร์