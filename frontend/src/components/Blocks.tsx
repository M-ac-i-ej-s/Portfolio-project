import {useEffect, useState} from 'react'
import {getBlocks} from '../services/block.service'
import {block} from '../types/block'
import Block from './Block';
import '../styles/blockComponent/blocks.scss'

function BlockComponent() {
  const [blocks, setBlocks] = useState<Array<null | block>>([]);
  const [lineHeight, setLineHeight] = useState<number>(0)
  const [opacity, setOpacity] = useState<number>(0)

  useEffect(() => {
    getBlocks(setBlocks)
  },[])

  useEffect(() => {
    setLineHeight(500*blocks.length)
    setOpacity(1)
  },[blocks])

  return (
    <>
    <div className='div__line' style={{'height':`${lineHeight}px`, 'opacity':opacity}}>
    </div>
    <div> 
      {blocks.map(el => {
        return <Block key={el._id} {...el} />
      })}
    </div>
    </>
  )
}

export default BlockComponent
