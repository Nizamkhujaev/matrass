const {fetch,fetchAll} = require('../../lib/postgres')

const insert = async (phoneNumber) => {
    try {
        let response = await fetch('insert into calls (phone_number) values ($1)',phoneNumber)
        console.log(response);
        return true
    } catch (err) {
        console.log(err)
    }
}

const fetchCalls = async () => {
    // let calls = await fetchAll('select * from calls where deleted = false')
    let calls = await fetchAll('select * from calls order by id')
    return calls
}

const updateCalls = async (id,phoneNumber,active) => {
    try {
        let calls = await fetch('update calls set phone_number = $2,active = $3 where id = $1',id,phoneNumber,active)
        return true
    } catch (err) {
        console.log(err)
    }
}

const deleteCalls = async (id) => {
    try{
        let calls = await fetch('update calls set deleted = true where id = $1',id)
        return true
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    insert,
    fetchCalls,
    updateCalls,
    deleteCalls
}