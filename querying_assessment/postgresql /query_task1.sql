-- Task 1: Find Specific Menu Items
-- Write a query to find the name and price of all menu items that are in the 'Side' category.

SELECT name, price
FROM menuitems
WHERE category = 'Side';

-- Thinking Process:
-- 1. เลือกคอลัมน์ name และ price จากตาราง menuitems
-- 2. ใช้เงื่อนไข WHERE เพื่อกรองเฉพาะรายการที่อยู่ในหมวดหมู่ 'Side'