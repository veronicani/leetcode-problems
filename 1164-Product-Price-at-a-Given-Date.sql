# Write your MySQL query statement below

-- select products where the earliest change_date is after 2019-08-16, and set price of 10
select distinct product_id, 10 as price
    from products
    group by product_id
    having min(change_date) > '2019-08-16'

union -- join with

-- select products + price, where the product and change_date are in
select product_id, new_price
    from products
    where (product_id, change_date) in (
        -- select products and latest change date before 2019-08-16
        select product_id, max(change_date) as recent_date
        from products
        where change_date <= '2019-08-16'
        group by product_id
    )