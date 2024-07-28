# Write your MySQL query statement below
select *, if(x + y > z and z + x > y and z+ y > x, 'Yes', 'No') as triangle
from triangle