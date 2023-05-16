import React, { useState } from 'react'
import styles from './Dashboard.module.css'

function Dashboard() {
    const [click, setClick] = useState('home');
    
    // Get Current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(undefined, {
        day: '2-digit',
        month: 'short'
      });
  return (
    <div className={styles.dashboard}>
        <div className={`${styles.menuContainer} ${styles.gridBlock}`}>
            <div className={styles.brandName}>
                <img className={styles.logoBrand} src='/images/brand/fotorgasm-brand-name-white.png'></img>
            </div>
            <div className={styles.mainMenu}>
                <ul>
                    <li onClick={()=>setClick('home')}>
                        <div>
                            <svg style={{fill: `${click==='home'?'var(--on-background)':'var(--on-background-matte)'}`}} height='25px' width='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2796 3.71579C12.097 3.66261 11.903 3.66261 11.7203 3.71579C11.6678 3.7311 11.5754 3.7694 11.3789 3.91817C11.1723 4.07463 10.9193 4.29855 10.5251 4.64896L5.28544 9.3064C4.64309 9.87739 4.46099 10.0496 4.33439 10.24C4.21261 10.4232 4.12189 10.6252 4.06588 10.8379C4.00765 11.0591 3.99995 11.3095 3.99995 12.169V17.17C3.99995 18.041 4.00076 18.6331 4.03874 19.0905C4.07573 19.536 4.14275 19.7634 4.22513 19.9219C4.41488 20.2872 4.71272 20.5851 5.07801 20.7748C5.23658 20.8572 5.46397 20.9242 5.90941 20.9612C6.36681 20.9992 6.95893 21 7.82995 21H7.99995V18C7.99995 15.7909 9.79081 14 12 14C14.2091 14 16 15.7909 16 18V21H16.17C17.041 21 17.6331 20.9992 18.0905 20.9612C18.5359 20.9242 18.7633 20.8572 18.9219 20.7748C19.2872 20.5851 19.585 20.2872 19.7748 19.9219C19.8572 19.7634 19.9242 19.536 19.9612 19.0905C19.9991 18.6331 20 18.041 20 17.17V12.169C20 11.3095 19.9923 11.0591 19.934 10.8379C19.878 10.6252 19.7873 10.4232 19.6655 10.24C19.5389 10.0496 19.3568 9.87739 18.7145 9.3064L13.4748 4.64896C13.0806 4.29855 12.8276 4.07463 12.621 3.91817C12.4245 3.7694 12.3321 3.7311 12.2796 3.71579ZM11.1611 1.79556C11.709 1.63602 12.2909 1.63602 12.8388 1.79556C13.2189 1.90627 13.5341 2.10095 13.8282 2.32363C14.1052 2.53335 14.4172 2.81064 14.7764 3.12995L20.0432 7.81159C20.0716 7.83679 20.0995 7.86165 20.1272 7.88619C20.6489 8.34941 21.0429 8.69935 21.3311 9.13277C21.5746 9.49916 21.7561 9.90321 21.8681 10.3287C22.0006 10.832 22.0004 11.359 22 12.0566C22 12.0936 22 12.131 22 12.169V17.212C22 18.0305 22 18.7061 21.9543 19.2561C21.9069 19.8274 21.805 20.3523 21.5496 20.8439C21.1701 21.5745 20.5744 22.1701 19.8439 22.5496C19.3522 22.805 18.8274 22.9069 18.256 22.9543C17.706 23 17.0305 23 16.2119 23H15.805C15.7972 23 15.7894 23 15.7814 23C15.6603 23 15.5157 23.0001 15.3883 22.9895C15.2406 22.9773 15.0292 22.9458 14.8085 22.8311C14.5345 22.6888 14.3111 22.4654 14.1688 22.1915C14.0542 21.9707 14.0227 21.7593 14.0104 21.6116C13.9998 21.4843 13.9999 21.3396 13.9999 21.2185L14 18C14 16.8954 13.1045 16 12 16C10.8954 16 9.99995 16.8954 9.99995 18L9.99996 21.2185C10 21.3396 10.0001 21.4843 9.98949 21.6116C9.97722 21.7593 9.94572 21.9707 9.83107 22.1915C9.68876 22.4654 9.46538 22.6888 9.19142 22.8311C8.9707 22.9458 8.75929 22.9773 8.6116 22.9895C8.48423 23.0001 8.33959 23 8.21847 23C8.21053 23 8.20268 23 8.19495 23H7.78798C6.96944 23 6.29389 23 5.74388 22.9543C5.17253 22.9069 4.64769 22.805 4.15605 22.5496C3.42548 22.1701 2.8298 21.5745 2.4503 20.8439C2.19492 20.3523 2.09305 19.8274 2.0456 19.2561C1.99993 18.7061 1.99994 18.0305 1.99995 17.212L1.99995 12.169C1.99995 12.131 1.99993 12.0936 1.99992 12.0566C1.99955 11.359 1.99928 10.832 2.1318 10.3287C2.24383 9.90321 2.42528 9.49916 2.66884 9.13277C2.95696 8.69935 3.35105 8.34941 3.87272 7.8862C3.90036 7.86165 3.92835 7.83679 3.95671 7.81159L9.22354 3.12996C9.58274 2.81064 9.89467 2.53335 10.1717 2.32363C10.4658 2.10095 10.781 1.90627 11.1611 1.79556Z">
                            </path> </g></svg>
                        </div>
                        <span style={{color:`${click==='home'?'var(--on-background)':'var(--on-background-matte)'}`}}>Home</span>
                    </li>
                    <li onClick={()=>setClick('blog')}>
                        <div>
                            <i style={{color:`${click==='blog'?'var(--on-background)':'var(--on-background-matte)'}`}} className="fas fa-feather-alt fa-lg"></i>
                        </div>
                        <span style={{color:`${click==='blog'?'var(--on-background)':'var(--on-background-matte)'}`}}>Posts</span>
                    </li>
                    <li onClick={()=>setClick('video')}>
                        <div>
                            <svg height='25px' width='25px' fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g dataname="Layer 2">
                            <g dataname="film" style={{display: 'flex', justifyContent:'center'}}>
                            <rect width="24" height="24" opacity="0"></rect>
                            <path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm14-2h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"></path>
                            </g> </g> </g></svg>
                        </div>
                        <span style={{color:`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}}>Videos</span>
                    </li>
                    <li onClick={()=>setClick('music')}>
                        <div>
                            <svg height='25px' width='25px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`} transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 11V13M6 10V14M9 11V13M12 9V15M15 6V18M18 10V14M21 11V13"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <span style={{color:`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`}}>Music</span>
                    </li>
                    <li onClick={()=>setClick('photo')}>
                        <div>
                            <svg height="30px" width="30px"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xmlSpace="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier" >
                            <path className="st1" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M32,19c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2l0,0c0-1.1,0.9-2,2-2h8C31.1,17,32,17.9,32,19L32,19z"></path> 
                            <path className="st2" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M50,21H37v22h8c1.1,0,2-0.9,2-2v-6c0,0,0-2,2-2h1c1.1,0,2-0.9,2-2v-8C52,21.9,51.1,21,50,21z"></path> 
                            <path className="st3" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M36,47c0,1.1-0.9,2-2,2H18c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2V47z"></path> 
                            <path className="st3" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M32,17c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2l0,0c0-1.1,0.9-2,2-2h8C31.1,15,32,15.9,32,17L32,17z"></path> 
                            </g>
                            </svg>
                        </div>
                        <span style={{color:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}}>Photos</span>
                    </li>
                </ul>
            </div>
            <div className={styles.logOut}>
                <div>
                    <svg height='25px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 6.62219V17.245C22 18.3579 21.2857 19.4708 20.1633 19.8754L15.0612 21.7977C14.7551 21.8988 14.449 22 14.0408 22C13.5306 22 12.9184 21.7977 12.4082 21.4942C12.2041 21.2918 11.898 21.0895 11.7959 20.8871H7.91837C6.38776 20.8871 5.06122 19.6731 5.06122 18.0544V17.0427C5.06122 16.638 5.36735 16.2333 5.87755 16.2333C6.38776 16.2333 6.69388 16.5368 6.69388 17.0427V18.0544C6.69388 18.7626 7.30612 19.2684 7.91837 19.2684H11.2857V4.69997H7.91837C7.20408 4.69997 6.69388 5.20582 6.69388 5.91401V6.9257C6.69388 7.33038 6.38776 7.73506 5.87755 7.73506C5.36735 7.73506 5.06122 7.33038 5.06122 6.9257V5.91401C5.06122 4.39646 6.28572 3.08125 7.91837 3.08125H11.7959C12 2.87891 12.2041 2.67657 12.4082 2.47423C13.2245 1.96838 14.1429 1.86721 15.0612 2.17072L20.1633 4.09295C21.1837 4.39646 22 5.50933 22 6.62219Z" fill="var(--on-background)"></path> <path d="M4.85714 14.8169C4.65306 14.8169 4.44898 14.7158 4.34694 14.6146L2.30612 12.5912C2.20408 12.49 2.20408 12.3889 2.10204 12.3889C2.10204 12.2877 2 12.1865 2 12.0854C2 11.9842 2 11.883 2.10204 11.7819C2.10204 11.6807 2.20408 11.5795 2.30612 11.5795L4.34694 9.55612C4.65306 9.25261 5.16327 9.25261 5.46939 9.55612C5.77551 9.85963 5.77551 10.3655 5.46939 10.669L4.7551 11.3772H8.93878C9.34694 11.3772 9.7551 11.6807 9.7551 12.1865C9.7551 12.6924 9.34694 12.7936 8.93878 12.7936H4.65306L5.36735 13.5017C5.67347 13.8052 5.67347 14.3111 5.36735 14.6146C5.26531 14.7158 5.06122 14.8169 4.85714 14.8169Z" fill="var(--on-background)"></path> </g></svg>
                </div>
                <span>Log Out</span>
            </div>
        </div>
        <div className={`${styles.headerContainer} ${styles.gridBlock}`}>
            <div className={styles.firstSection}>
                <div className={styles.adminPart}>
                    <div className={styles.adminImageContainer}>
                        <img src='/images/brand/fotorgasm-logo-no-ring.png'></img>
                    </div>
                    <div className={styles.adminName}>
                        <span>@fotorgasm</span>
                        <span>Project Admin</span>
                    </div>
                </div>
                <div className={styles.datePart}>
                    <div className={styles.iconContainer}>
                        <svg height='1vw' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 2V5" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 2V5" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.5 9.08997H20.5" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.9955 13.7H12.0045" stroke="var(--on-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8.29431 13.7H8.30329" stroke="var(--on-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8.29431 16.7H8.30329" stroke="var(--on-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                    <div className={styles.dateMonth}>
                        <span>{formattedDate}</span>
                    </div>
                </div>
            </div>
            <div className={styles.secondSection}>
                <form className={styles.searchBar}>
                    <svg height='1vw' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M14 5H20" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M14 8H17" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M22 22L20 20" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        value=''
                    />
                </form>
                <div className={styles.notiButton}>
                    <svg height='1vw' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path> <path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10"></path> </g></svg>
                </div>
            </div>
        </div>
        <div className={`${styles.reportContainer} ${styles.gridBlock}`}></div>
        <div className={`${styles.teamContainer} ${styles.gridBlock}`}></div>
        <div className={`${styles.scheduleContainer} ${styles.gridBlock}`}></div>
    </div>
  )
}

export default Dashboard