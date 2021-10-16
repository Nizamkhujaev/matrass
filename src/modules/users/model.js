const {fetch,fetchAll} = require('../../lib/postgres')
const path = require('path')
const fs = require('fs')

const insert = async (file,{firstName,lastName,username,password}) => {
    try {
        file.mv(path.join(process.cwd(),'src','uploads','images',file.name))
        let fileName = file.name

        let user = await fetch(`insert into users 
         (first_name,username,password,last_name,user_img) 
         values ($1,$2,md5($3),$4,$5) RETURNING*`
            ,firstName,username,password,lastName,fileName
        )
        return user
    }catch (err) {
        return err
    }

}

const fetchUsers = async () => {
    let users = await fetchAll('select * from users')
    for (let user of users) {
<<<<<<< Updated upstream
        user.user_img = 'http://localhost:4500/' + user.user_img
=======
        user.user_img = user.user_img
>>>>>>> Stashed changes
    }
    return await users
}

const Login = async (username,password) => {

   try {
       let user = await fetch(`select * from users where username = $1 and password = md5($2) and deleted = false`,username,password)
<<<<<<< Updated upstream
       user.user_img = 'http://localhost:4500/' + user.user_img
=======
    //    user.user_img = user.user_img
>>>>>>> Stashed changes
       delete user.password
       console.log(user)
       return user
   } catch (err) {
       return err
   }

}

const updateUser = async (file,{id,firstName,lastName,password,username}) => {
    try {
        let user = await fetch('select * from users where user_id = $1',id)
        console.log(await user)
        console.log(file.name)
        fs.unlinkSync(path.join(process.cwd(),'src','uploads','images',user.user_img))
        file.mv(path.join(process.cwd(),'src','uploads','images',file.name))
        let response = await fetch(
            'update users set first_name = $1,last_name = $2, username = $3, password = md5($4), user_img = $5 where user_id = $6 RETURNING',
            firstName,lastName,username,password,file.name,id
        )
        return true
    }catch (err) {
        console.log(err)
    }
}

const deleteUser = async (id) => {
    await fetch('update users set deleted = true')
    return true
}

module.exports = {
    insert,
    fetchUsers,
    Login,
    updateUser,
    deleteUser
}