// Task 4: Calculate Total Revenue
// Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

use("chrome-burger-db");

db.orders.aggregate([
  { $group: { _id: null, total_revenue: { $sum: "$total_price" } } },
  { $project: { _id: 0, total_revenue: 1 } },
]);

// Thinking Process
// 1. ใช้คำสั่ง use() เพื่อเลือกฐานข้อมูล chrome-burger-db
// 2. ใช้คำสั่ง db.orders.aggregate() เพื่อเริ่มต้นการใช้แอ็กเกรเกตในคอลเล็กชัน orders
// 3. ใช้ $group เพื่อจัดกลุ่มคำสั่งซื้อทั้งหมด และคำนวณยอดขายรวม
// 4. ใช้ $project เพื่อกำหนดฟิลด์ที่ต้องการแสดงผล โดยไม่แสดง _id และแสดงยอดขายรวม
