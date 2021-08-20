const jwt = require('jsonwebtoken')
const { token } = require('morgan')

console.log(jwt.sign(
    {
        data: 'foobar'
    }, 
    'secret', {expiresIn: 60 * 60}
))
const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaWFnbyIsImlkYWRlIjoxMCwiaWF0IjoxNjI5NDE5NjEzLCJleHAiOjE2Mjk0MjMyMTN9.LZIDZxmjnEFjInxo8xp4VTO1NjfuOeauSa8o4vfivyY"


console.log(jwt.verify(token1, 'aula'))