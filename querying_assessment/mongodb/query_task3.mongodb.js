// Task 3: Find Ingredients by Stock Level
// Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

use("chrome-burger-db");

db.ingredients.find(
  { stock_level: { $gte: 100.00 } },
  { _id: 0, name: 1, stock_level: 1 }
)

// Thinking Process
// 1. ใช้คำสั่ง use() เพื่อเลือกฐานข้อมูล chrome-burger-db
// 2. ใช้คำสั่ง db.ingredients.find() เพื่อค้นหาเอกสารในคอลเล็กชัน ingredients
// 3. กำหนดเงื่อนไขการค้นหา { stock_level: { $gte: 100.00 } } เพื่อหาส่วนผสมที่มีระดับสต็อก 100.00 ขึ้นไป
// 4. กำหนดฟิลด์ที่ต้องการแสดงผล { _id: 0, name: 1, stock_level: 1 } เพื่อแสดงชื่อและระดับสต็อกของส่วนผสม โดยไม่แสดง _id