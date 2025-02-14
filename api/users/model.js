const { nanoid } = require('nanoid')

function getId() {
  return nanoid().slice(0, 5)
}

const initializeUsers = () => ([
  { id: getId(), username: 'Nick', password: getId()+Math.random()},
  { id: getId(), username: 'Mary Edwards', password: getId()+Math.random() },
])

let users = initializeUsers()

const find = () => {
  return Promise.resolve(users)
}

const insert = ({ username, password }) => {
  const newUser = { id: getId(), username, password }
  users.push(newUser)
  return Promise.resolve(newUser)
}

const findUser = ({ username, password }) => {
  const user = { username, password }
  if ( users.some(validUser => validUser.username === user.username) && users.some(validPassword => validPassword.password === user.password) ) {
    return Promise.resolve(user.username)
  }
}

module.exports = {
  find,
  insert,
  findUser,
}
