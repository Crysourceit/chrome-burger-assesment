// Task 2: Find Orders and Project Fields
// Write a query to find all orders in the orders collection handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

use("chrome-burger-db");


db.orders.aggregate([
    { $match: { "staff.first_name": "Jane", "staff.last_name": "Doe" } },
    { $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$order_date" } },
        total_sales_for_day: { $sum: "$total_price" }
    }},
    { $project: {
        _id: 0,
        order_date: "$_id",
        total_sales_for_day: 1
    }}
]);

// Thinking Process
// 1. ใช้คำสั่ง use() เพื่อเลือกฐานข้อมูล chrome-burger-db
// 2. ใช้คำสั่ง db.orders.aggregate() เพื่อเริ่มต้นการใช้แอ็กเกรเกตในคอลเล็กชัน orders
// 3. ใช้ $match เพื่อกรองเอกสารที่มีชื่อพนักงานเป็น "Jane" และนามสกุลเป็น "Doe"
// 4. ใช้ $group เพื่อจัดกลุ่มคำสั่งซื้อโดยวันที่ และคำนวณยอดขายรวมต่อวัน
// 5. ใช้ $project เพื่อกำหนดฟิลด์ที่ต้องการแสดงผล โดยไม่แสดง _id และแสดงวันที่คำสั่งซื้อและยอดขายรวมต่อวัน
