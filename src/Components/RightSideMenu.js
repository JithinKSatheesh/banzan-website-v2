import React,{useState} from 'react';
import Zoom from 'react-reveal/Zoom';

export default function RightSideMenu() {

    let mediaQuery = window.innerWidth
    const [show,setShow] = useState(false)

    const _style = {
        pop_menu_container: {
            position: 'fixed',
            right:'0',
            zIndex: '100000',
            top: 'calc(50% - 155px)',
            display: 'flex',
            transform: `${show? 'translateX(150px)' : 'translateX(280px)'} `,
            transition : 'transform 0.5s ease'
            
        },
        menu_handle: {
            width: '50px',
            height: mediaQuery<= '400'? '50px':'150px',
            backgroundColor: '#c42f48',
            borderRadius: '10px',
            transform: 'translateX(30px)',
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0px 0px 5px 5px #21212127',
            cursor:'pointer',
        },
        menu_button_box: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        menu_list_box: {
            height: '300px',
            width: '300px',
            backgroundColor: '#c42f48',
            boxShadow: '0px 0px 5px 5px #21212127',
            borderRadius: '50%',
        }
    };

    const _svg_media = <svg fill='#f9c847'  width="14" height="14" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
    const _svg_media2 = <svg fill='#f9c847'width="14" height="14" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
    const _svg_arrow_right = <svg fill='#f9c847' width="14" height="14" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
    const _svg_arrow_left = <svg fill='#f9c847' width="14" height="14" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>

    

    return (
        <div 
            className="d-none d-md-flex"
            onMouseEnter={()=>{setShow(true)}}
            onMouseLeave={()=>{setShow(false)}}
            style={_style.pop_menu_container}>
            {/* --pull handle---- */}
            <div 
                style={_style.menu_handle}>
                <div style={_style.menu_button_box}></div>
                <Zoom><div className="text-center p-1">{_svg_media}</div></Zoom>
                {
                    show?
                        <Zoom><div className="text-center p-1">{_svg_arrow_right}</div></Zoom>
                        :
                        <Zoom><div className="text-center p-1">{_svg_arrow_left}</div></Zoom>
                }
                <Zoom><div className="text-center p-1">{_svg_media2}</div></Zoom>
            </div>
            {/* --menu---- */}
            <div style={_style.menu_list_box}>

            </div>
        </div>
    );
};
