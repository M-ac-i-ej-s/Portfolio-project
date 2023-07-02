import axios from "axios"
import {block} from '../types/block'

export const getBlocks = async (fun) => {
    await axios.get('http://localhost:3000/blocks')
               .then((res) => {
                  console.log(res)
                  fun(res.data.Block)
               })
}

export const postBlock = async (config: {headers: {Authorization: string}},
                              block: block,
                           ) => {
                  await axios.post('http://localhost:3000/blocks', 
                                 {
                                    date: block.date,
                                    title: block.title,
                                    description: block.description,
                                    links: block.links
                                 }
                                 ,config)
                                 .then((res) => {
                                 console.log(res)
                                 })
}

export const deleteBlock = async (config: {headers: {Authorization: string}},
                              id: string,) => {
                              await axios.delete(`http://localhost:3000/blocks?id=${id}`, config)
                                 .then((res) => {
                                 console.log(res)
                                 })
                              }