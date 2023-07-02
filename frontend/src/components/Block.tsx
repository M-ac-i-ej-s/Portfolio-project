import React, {useEffect, useState} from 'react'
import * as PropTypes from 'prop-types'
import '../styles/blockComponent/block.scss'
import AOS from "aos";
import 'aos/dist/aos.css';

function Block({date, title, description, links}: PropTypes.InferProps<typeof BlockTypes>) {
    const [opacity, setOpacity] = useState<number>(0)
    const [underline, setUnderline] = useState<string>('none')

    useEffect(() => {
        AOS.init()
        setOpacity(1)
    },[])

  return (
    <div data-aos="fade-down" className='div__block'>
        <div className='div__date'>
            <span>{date}</span>
        </div>
        <div className='div__white_block' style={{'opacity':opacity}}>
        </div>
        <div className='div__data'>
            <span className='span__title'>{title}</span>
            <span className='span__description'>{description}</span>
            <span className='span__links'>
                <a className='a__link' href={links} label="link" onMouseOver={() => {setUnderline('underline')}} onMouseLeave={() => {setUnderline('none')}} style={{'textDecoration':underline}}>link</a>
            </span>
        </div>
    </div>
  )
}

const BlockTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    links: PropTypes.string,
    opacity: PropTypes.number
}

Block.propTypes = BlockTypes;

export default Block
