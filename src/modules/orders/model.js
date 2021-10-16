const {fetch,fetchAll} = require('../../lib/postgres')


const insert = async ({product,clientContact,clientName,count}) => {
    let productId = await fetch('select product_id from products where product_name = $1',product)
    let order = fetch(
        'insert into orders (product_id,client_contact,client_name,count) values ($1,$2,$3,$4) RETURNING*',
               productId.product_id,clientContact,clientName,count
    )
    console.log(await order)
    return order
}

const fetchOrders = async () => {
    try{
        let orders = await fetchAll('select * from orders o inner join products p using(product_id)')
        for (let order of orders) {
            delete order.product_id
        }
        return orders
    } catch(err){
        console.log(err)
    }
}

const updateOrders = async (id,active) => {
    let order = await fetch('update orders set active = $1 where order_id = $2 RETURNING*',active,id)
    return order
}



module.exports = {
    insert,
    fetchOrders,
    updateOrders
}