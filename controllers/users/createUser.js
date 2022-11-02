const {request, response} = require('express')

const createUser = (req=request, res=response) => {
    const {firstName, lastName, email, password, roleId} = req.body;
    const {avatar} = req.file;

    

}