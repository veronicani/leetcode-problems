# Write your MySQL query statement below
select name, bonus
    from employee e
    left join bonus b on e.empId = b.empId
    where b.bonus is null or b.bonus < 1000