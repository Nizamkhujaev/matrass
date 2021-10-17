const model = require('./model')


const POST = (req,res) => {
    const {phoneNumber} = req.body
    if (phoneNumber){
        let response = model.insert(phoneNumber)
        if (response){
            res.send({
                status:201,
                message: 'The data successfully created'
            })
        }
    }else{
        res.send({
            status:400,
            message:'bad request'
        })
    }
}

const GET = async (req,res) => {
    let response = await model.fetchCalls()
    // console.log(response)
    if (response){
        res.send({
            status:200,
            message: 'successfully fetched',
            data:response
        })
    }else{
        res.send({
            status:400,
            message:'bad request'
        })
    }
}

const PUT = async (req,res) => {
    const {id,phoneNumber,active} = req.body
    let response = await model.updateCalls(id,phoneNumber,active)
    if (response){
        res.send({
            status:200,
            message: 'the data updated',
        })
    }else{
        res.send({
            status:400,
            message:'bad request'
        })
    }
}

const DELETE = async (req,res) => {
    const {id} = req.body
    let response = await model.deleteCalls(id)
    if (response){
        res.send({
            status:200,
            message: 'the data deleted',
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
    DELETE
}