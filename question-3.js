/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) การ search แบบ linear นั้น จะเข้าถึงสมาชิกทุกตัวของ array เช่น ถ้ามีสมาชิก 10 ตัว ก็จะทำการ loop ทั้ง 10 ตัว


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) การ search แบบ binary นั้น ข้อมูลจะต้องเรียงลำดับแล้ว การ loop สูงสุดจะเท่ากับ log (n)


*/

/* 
Which function is more efficient and why?
Answer: binary search O(log n) ข้อมูลมีการเรียงลำดับแล้ว หากใช้ binary search จำนวนรอบในการ loop น้อยกว่า linear search
linear ะเข้าถึงสมาชิกทุกตัวของ array แต่ binary การ loop จะลดลงอย่างละครึ่งของจำนวนสมาชิกที่ต้อง loop ในครั้งต่อไป
ยิ่ง n มากก็จะยิ่งเห็นความต่างของจำนวนรอบในการ loop


*/
