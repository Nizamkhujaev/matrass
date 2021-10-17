const model = require('./model')


const POST = async (req,res) => {
    if (req.body != null){
        let response = await model.insert(req.body)
        if (response){
            res.send({
                status:201,
                message:'the data successfully created',
                data:await response
            })
        }else if (!response){
            res.send({
                status:400,
                message:'bad request'
            })
        }
    }
}

const GET = async (req,res) => {
   let orders = await model.fetchOrders()
    if (orders){
        res.send({
            status:200,
            message:'all orders successfully fetched',
            data: orders
        })
    }else{
        res.send({
            status:400,
            message:'bad request'
        })
    }
}

const PUT = async (req,res) => {
        let response = await model.updateOrders(req.body)
        if (response){
            res.send({
                status:200,
                message:'the order updated',
            })
        }else{
            res.send({
                status:400,
                message:'bad request'
            })
        }
}
module.exports = {
    POST,
    GET,
    PUT,
}