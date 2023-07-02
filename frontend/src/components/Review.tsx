import {useState, useEffect, useRef} from 'react'
import {user} from '../types/user'
import {getUser} from '../services/user.service'
import Loader from './Loader'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ApiIcon from '@mui/icons-material/Api';
import '../styles/reviewComponent/review.scss'
import { padding } from '@mui/system';

function ReviewComponent() {
  const [user, setUser] = useState<null | user>(null);
  const constrain = 50;

  function Transforms(x, y, el) {
    const box = el.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / constrain;
    const calcY = (x - box.x - box.width / 2) / constrain;
  
    return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  }

  const ex1LayerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xy = [clientX, clientY];
    const position = xy.concat([ex1LayerRef.current]);

    window.requestAnimationFrame(() => {
      transformElement(ex1LayerRef.current, position);
    });
  };

  const transformElement = (el, xyEl) => {
    el.style.transform = Transforms(...xyEl);
  };

  useEffect(() => {
    getUser(setUser)

  },[])

  return (
    <div>
        <div className='div__main_box' onMouseMove={handleMouseMove}>
                <div className='div__left'>
                    <span className='span__name'>{user?.name},</span>
                    <span className='span__title'>THE DEVELOPER</span>
                </div>
                <div className='div__middle'>
                    <ApiIcon sx={{'fontSize':'200px', 'color':'#4dbbff'}} ref={ex1LayerRef}/>
                </div>
                <div className='div__right'>
                    <span>full_name: "{user?.name} {user?.surname}"</span>
                    <span>age: {user?.age}</span>
                    <span>description: "{user?.description}"</span>
                    <span>email: "{user?.email}"</span>
                    <div className='icons'>
                        <GitHubIcon fontSize='large' sx={{'fontSize':'50px'}}/>
                        <LinkedInIcon fontSize='large'sx={{'fontSize':'50px', 'marginLeft':'15px'}}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ReviewComponent
