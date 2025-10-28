// Task 1: Find Menu Items by Price
// Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

use("chrome-burger-db");

db.menu_items.find({ price: { $lt: 10.00 } }, { name: 1, price: 1, _id: 0 });

// Thinking Process
// 1. ใช้คำสั่ง use() เพื่อเลือกฐานข้อมูล chrome-burger-db
// 2. ใช้คำสั่ง db.menu_items.find() เพื่อค้นหาเอกสารในคอลเล็กชัน menu_items
// 3. กำหนดเงื่อนไขการค้นหา { price: { $lt: 10.00 } } เพื่อหาสินค้าที่มีราคาน้อยกว่า 10.00
// 4. กำหนดฟิลด์ที่ต้องการแสดงผล { name: 1, price: 1, _id: 0 } เพื่อแสดงชื่อและราคาของเมนู โดยไม่แสดง _id