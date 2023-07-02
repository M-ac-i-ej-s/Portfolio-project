import axios from "axios"
import {user} from '../types/user'

export const getUser = async (fun) => {
    await axios.get('http://localhost:3000/user')
               .then((res) => {
                  console.log(res)
                  fun(res.data.User[0])
               })
}

export const editUser = async (config: {headers: {Authorization: string | undefined}},
                                 user: user,
                                ) => {
    await axios.put('http://localhost:3000/user', 
                {
                    id: user._id,
                    name:user.name,
                    surname:user.surname,
                    age:user.age,
                    description:user.description,
                    email:user.email,
                    github:user.github,
                    linkedIn:user.linkedIn
                }
                ,config)
               .then((res) => {
                  console.log(res)
               })
  }