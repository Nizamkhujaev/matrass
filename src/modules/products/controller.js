const model = require('./model')

const POST  = async (req,res) => {
    const {file} = req.files
    if (req.body != null){
        let response = await model.insert(file,req.body)
        if (response.product_id){
            res.send({
                status:201,
                message:'the date created'
            })
        }else{
            res.send({
                status:400,
                message:'bad request'
            })
        }
    }
}

const GET = async (req,res) => {
    let response = model.fetchProducts()
    // console.log(response)
    if (response){
        res.send({
            status:200,
            message:'the data successfully fetched',
            data:await response
        })
    }else{
        res.send({
            status:400,
            message:'bad request'
        })
    }
}


const PUT = (req,res) => {
    const {file} = req.files

    if (req.body != null){
        let response = model.updateProducts(file,req.body)
        if (response){
            res.send({
                status:201,
                message:'the date updated'
            })
        }else{
            res.send({
                status:400,
                message:'bad request'
            })
        }
    }
}

const DELETE = (req,res) => {
    const {id} = req.body
    if (id){
        let response = model.deleteProducts(id)
        if (response){
            res.send({
                status:201,
                message:'the date updated'
            })
        }else{
            res.send({
                status:400,
                message:'bad request'
            })
        }
    }
}

const FETCH = async (req,res) => {
    const {id} = req.params
    if (id){
        let response = model.fetchOne(id)
        if (response){
            res.send({
                status:201,
                message:'the data successfully fetched',
                data:await response
            })
        }else{
            res.send({
                status:400,
                message:'bad request'
            })
        }
    }
}

module.exports = {
    POST,
    GET,
    PUT,
    DELETE,
    FETCH
}