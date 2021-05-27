import React from 'react';
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
// import {useSpring,animated} from 'react-spring'

export default function RightBottomIcon() {

    // let isMobile = window.innerWidth < 400
    // const [show,setShow] = useState(false)

    const _bg = '#c42f48' 
    const _color = '#fcc812' 

    const _style = {
        pop_menu_container: {
            width: '50px',
            height: '50px',
            backgroundColor: _bg,
            borderRadius: '50px',
            position: 'fixed',
            zIndex: '100000',
            right:'20px',
            bottom: '20px',
            boxShadow: '0px 0px 5px 5px #21212127',
            display: 'flex',
            
            flexDirection: 'column',
            justifyContent: 'center',
            // writingMode:'vertical-rl',
            // transform:'rotateZ(180deg)'
           
        },
        menu_handle: {
            alignSelf: 'center',
        },
        

    };

    const message = <svg fill='#f8d249' width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>

    return (
        <Zoom>
            <div 
                className="d-none d-md-flex text-bold"
                style={_style.pop_menu_container}>
                    <div style={_style.menu_handle}>
                            <Link to='/contact'>
                                    {message}
                            </Link>
                    </div>
            </div>
        </Zoom>
    );
};
