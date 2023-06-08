import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/auth/authSlice';
import axios from 'axios';

function Dashboard() {
    const user = useSelector((state) => {state.auth});
    const dispatch = useDispatch();

    const [click, setClick] = useState('home');
    const [searchTerm, setSearchTerm] = useState('');
    const [popupAdmin, setPopupAdmin] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);


    // Get Current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(undefined, {
        day: '2-digit',
        month: 'short'
      });
    // Handle search
    function handleInputChange(event){
        setSearchTerm(event.target.value);
    }

    // Handle Image Upload
    const handleImageSelected = (event) => {
        setSelectedImg(event.target.files[0]);
        // Automatically submit the form when a file is selected
        event.target.form.submit()
    }
    // Handle update admin info
    const handleAdminUpdate =   (event) => {
        event.preventDefault();
        if (selectedImg){
            console.log('updating');
            setTimeout(5000)
            // try {
            //     const formData = new FormData();
            //     formData.append('avatar', selectedImg);
            //     formData.append('userID', user.userID);
                
            //     const res = await axios.post('https://w9esxs9q88.execute-api.ap-southeast-1.amazonaws.com/dev/admin/update', formData, {
            //         headers: { 'Content-Type': 'multipart/form-data' }
            //     });
            // } catch (err) {
            //     console.log(err);
            // }
        }
    }

  return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardWrapper}>
            <div className={`${styles.menuContainer} ${styles.gridBlock}`}>
                <Link to='/' className={styles.brandName}>
                    <img className={styles.logoBrand} src='/images/brand/fotorgasm-brand-name-white.png'></img>
                </Link>
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
                                <svg height="25px" width="25px"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xmlSpace="preserve" fill="#000000">
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
                <div className={styles.logOut} onClick={()=>dispatch(logout())}>
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
                    <div className={`${styles.datePart} ${styles.bubble}`}>
                        <div className={styles.iconContainer}>
                            <svg height='18px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 2V5" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 2V5" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.5 9.08997H20.5" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.9955 13.7H12.0045" stroke="var(--on-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8.29431 13.7H8.30329" stroke="var(--on-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8.29431 16.7H8.30329" stroke="var(--on-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <div className={styles.dateMonth}>
                            <span>{formattedDate}</span>
                        </div>
                    </div>
                    <div className={`${styles.editPart} ${styles.bubble}`} >
                        <div className={styles.iconContainer} onClick={() => setPopupAdmin(!popupAdmin)}>
                            <svg height='18px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Edit_Pencil_01"> <path id="Vector" d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                        </div>
                    </div>
                    <form id='adminUpdate' className={styles.editForm} onSubmit={handleAdminUpdate}>
                        <label htmlFor='avatar-upload' style={{transform: popupAdmin ? 'translateX(20px)' : 'translateX(0px)', opacity: popupAdmin ? '1' : '0', visibility: popupAdmin ? 'visible' : 'hidden'}} className={`${styles.iconContainer} ${styles.editItem}`}>
                            <input hidden id='avatar-upload' type="file" accept="image/*" onChange={handleImageSelected} />
                            <svg height='18px' fill="#ffffff" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 33.7033 50.6023 C 45.8956 50.6023 56 40.4980 56 28.3056 C 56 16.1355 45.8735 6.0088 33.6809 6.0088 C 22.4539 6.0088 12.9559 14.6536 11.6086 25.5437 C 18.5918 25.6560 24.4523 30.7755 25.6648 37.4668 C 28.0449 36.4563 30.8068 35.8725 33.7033 35.8725 C 39.2269 35.8725 44.0994 37.9383 47.0632 41.1267 C 43.6952 44.6071 38.9575 46.8076 33.6809 46.8076 C 30.5822 46.8076 27.6632 46.0217 25.1034 44.6969 C 24.6993 45.8870 24.1604 47.0096 23.4194 48.0650 C 26.5405 49.6817 30.0209 50.6023 33.7033 50.6023 Z M 33.6809 32.1002 C 29.3921 32.1002 26.1363 28.3505 26.1363 23.6800 C 26.1363 19.2566 29.4595 15.4170 33.6809 15.4170 C 37.9246 15.4170 41.2703 19.2566 41.2478 23.6800 C 41.2478 28.3505 37.9920 32.1002 33.6809 32.1002 Z M 11.4066 51.4555 C 17.6039 51.4555 22.8132 46.2911 22.8132 40.0489 C 22.8132 33.8068 17.6712 28.6424 11.4066 28.6424 C 5.1644 28.6424 0 33.8068 0 40.0489 C 0 46.3360 5.1644 51.4555 11.4066 51.4555 Z M 11.4290 47.4587 C 10.6431 47.4587 9.9471 46.9198 9.9471 46.0666 L 9.9471 41.4186 L 5.6584 41.4186 C 4.8949 41.4186 4.2662 40.7899 4.2662 40.0489 C 4.2662 39.2855 4.8949 38.6568 5.6584 38.6568 L 9.9471 38.6568 L 9.9471 34.0088 C 9.9471 33.1780 10.6431 32.6391 11.4290 32.6391 C 12.1925 32.6391 12.8885 33.1780 12.8885 34.0088 L 12.8885 38.6568 L 17.1772 38.6568 C 17.9407 38.6568 18.5469 39.2855 18.5469 40.0489 C 18.5469 40.7899 17.9407 41.4186 17.1772 41.4186 L 12.8885 41.4186 L 12.8885 46.0666 C 12.8885 46.9198 12.1925 47.4587 11.4290 47.4587 Z"></path></g></svg>
                        </label>
                        <div style={{transform: popupAdmin ? 'translateX(40px)' : 'translateX(0px)', opacity: popupAdmin ? '1' : '0', visibility: popupAdmin ? 'visible' : 'hidden'}} className={`${styles.iconContainer} ${styles.editItem}`}>
                            <svg height='18px' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="var(--ci-primary-color, #ffffff)" d="M495.826,232a206.644,206.644,0,0,0-18.882-78.412,227.033,227.033,0,0,0-51.61-71.261C379.708,39.555,319.571,16,256,16A240,240,0,0,0,86.294,425.706a240,240,0,0,0,337.671,1.722l-22.4-22.856A206.824,206.824,0,0,1,256,464C141.309,464,48,370.691,48,256S141.309,48,256,48c112.748,0,208,87.925,208,192v36c0,28.673-25.122,52-56,52s-56-23.327-56-52V160H320v26.751a99.988,99.988,0,1,0,12.55,132.437C347.956,343.62,376.01,360,408,360c48.523,0,88-37.682,88-84V232ZM252,328a68,68,0,1,1,68-68A68.077,68.077,0,0,1,252,328Z" className="ci-primary"></path> </g></svg>
                        </div>
                        <div style={{transform: popupAdmin ? 'translateX(60px)' : 'translateX(0px)', opacity: popupAdmin ? '1' : '0', visibility: popupAdmin ? 'visible' : 'hidden'}} className={`${styles.iconContainer} ${styles.editItem}`}>
                            <svg height='18px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z" fill="#ffffff"></path> <path d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill="#ffffff"></path> <path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM19.01 6.57C18.98 6.6 18.91 6.64 18.86 6.64L17.82 6.79C17.79 6.8 17.75 6.8 17.72 6.8C17.57 6.8 17.44 6.75 17.35 6.65C17.23 6.53 17.18 6.36 17.21 6.18L17.36 5.14C17.37 5.09 17.4 5.02 17.43 4.99L19.13 3.29C19.16 3.36 19.19 3.44 19.22 3.52C19.26 3.6 19.3 3.67 19.34 3.74C19.37 3.8 19.41 3.86 19.45 3.9C19.49 3.96 19.53 4.02 19.56 4.05C19.58 4.08 19.59 4.09 19.6 4.1C19.69 4.21 19.79 4.31 19.88 4.38C19.9 4.4 19.92 4.42 19.93 4.42C19.98 4.46 20.04 4.51 20.08 4.54C20.14 4.58 20.19 4.62 20.25 4.65C20.32 4.69 20.4 4.73 20.48 4.77C20.56 4.81 20.64 4.84 20.71 4.86L19.01 6.57ZM21.4 4.18L21.08 4.5C21.06 4.53 21.03 4.54 21 4.54C20.99 4.54 20.98 4.54 20.97 4.54C20.25 4.33 19.68 3.76 19.47 3.04C19.46 3 19.47 2.96 19.5 2.93L19.83 2.6C20.37 2.06 20.88 2.07 21.41 2.6C21.68 2.87 21.81 3.13 21.81 3.39C21.8 3.65 21.67 3.91 21.4 4.18Z" fill="#ffffff"></path> </g></svg>
                        </div>
                    </form>
                </div>
                <div className={styles.secondSection}>
                    <form className={styles.searchBar}>
                        <svg height='18px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M14 5H20" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M14 8H17" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M22 22L20 20" stroke="var(--on-background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </form>
                    <div className={styles.notiButton}>
                        <svg height='18px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path> <path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke="var(--on-background)" strokeWidth="1.5" strokeMiterlimit="10"></path> </g></svg>
                    </div>
                    <div className={styles.chatButton}>
                        <svg height='18px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.9886 20.9463L12.88 19.9522L12.35 20.0101L12.1027 20.4825L12.9886 20.9463ZM6.45572 19.09L7.06966 19.8793L8.08109 19.0927L7.07226 18.3027L6.45572 19.09ZM4.23006 20.8211L3.61612 20.0317L3.61611 20.0317L4.23006 20.8211ZM20 12C20 16.1206 16.8838 19.5148 12.88 19.9522L13.0973 21.9404C18.1043 21.3933 22 17.1523 22 12H20ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM7.07226 18.3027C5.20015 16.8366 4 14.5587 4 12H2C2 15.1996 3.50381 18.0485 5.83917 19.8773L7.07226 18.3027ZM4.844 21.6104L7.06966 19.8793L5.84178 18.3006L3.61612 20.0317L4.844 21.6104ZM4.29145 20C5.1484 20 5.52041 21.0843 4.84401 21.6104L3.61611 20.0317C2.78939 20.6747 3.24408 22 4.29145 22V20ZM12 20H4.29145V22H12V20ZM12.9 20H12V22H12.9V20ZM12.1027 20.4825C12.2517 20.1979 12.5519 20 12.9 20V22C13.3252 22 13.6921 21.7586 13.8746 21.4102L12.1027 20.4825Z" fill="var(--on-background)"></path> <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="var(--on-background)"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="var(--on-background)"></path> <path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="var(--on-background)"></path> </g></svg>
                    </div>
                </div>
            </div>
            <div className={`${styles.teamContainer} ${styles.gridBlock}`}>
                <div className={styles.teamHeader}>
                    <h1>Team</h1>
                    <div className={styles.teamCount}>
                        <div>
                            <svg height='20px' fill="var(--primary)" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 14.5 C 32.4765 14.5 36.0390 18.4375 36.0390 23.1719 C 36.0390 28.2109 32.4999 32.0547 27.9999 32.0078 C 23.4765 31.9609 19.9609 28.2109 19.9609 23.1719 C 19.9140 18.4375 23.4999 14.5 27.9999 14.5 Z M 42.2499 41.8750 L 42.3202 42.1797 C 38.7109 46.0234 33.3671 48.2266 27.9999 48.2266 C 22.6093 48.2266 17.2655 46.0234 13.6562 42.1797 L 13.7265 41.8750 C 15.7655 39.0625 20.7812 35.9922 27.9999 35.9922 C 35.1952 35.9922 40.2343 39.0625 42.2499 41.8750 Z"></path></g></svg>

                        </div>
                        <span>4</span>
                    </div>
                </div>
                <div className={styles.teamMembers}>
                    <div className={styles.memberContainer}>
                        <img height='50px' src='/images/brand/portrait.png'></img>
                        <div className={styles.memberName}>
                            <h2>Trần Phúc Sang</h2>
                            <h3>Reader • Traveler • Writer</h3>
                        </div>
                        <div className={styles.functionDot}>
                            <svg height='20px' fill="var(--on-background)" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Glyph" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path><path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path><path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g></svg>
                        </div>
                    </div>
                    <div className={styles.memberContainer}>
                        <img height='50px' src='/images/brand/portrait.png'></img>
                        <div className={styles.memberName}>
                            <h2>Trà</h2>
                            <h3>Photographer • Artist</h3>
                        </div>
                        <div className={styles.functionDot}>
                            <svg height='20px' fill="var(--on-background)" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Glyph" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path><path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path><path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g></svg>
                        </div>
                    </div>
                    <div className={styles.memberContainer}>
                        <img height='50px' src='/images/brand/portrait.png'></img>
                        <div className={styles.memberName}>
                            <h2>Yuki</h2>
                            <h3>Musician • Listener • Collector</h3>
                        </div>
                        <div className={styles.functionDot}>
                            <svg height='20px' fill="var(--on-background)" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Glyph" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path><path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path><path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g></svg>
                        </div>
                    </div>
                    <div className={styles.memberContainer}>
                        <img height='50px' src='/images/brand/portrait.png'></img>
                        <div className={styles.memberName}>
                            <h2>陈福创</h2>
                            <h3>Interpreter</h3>
                        </div>
                        <div className={styles.functionDot}>
                            <svg height='20px' fill="var(--on-background)" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Glyph" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_"></path><path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path><path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_"></path></g></svg>
                        </div>
                    </div>
                </div>
                <div className={styles.addMembers}>
                    <div className={styles.button}>
                        <svg height='30px' viewBox="0 0 24 24" fill="url(#gradient1)" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="gradient1" x1="100%" y1="100%" x2="00%" y2="00%">
                            <stop offset="0%" stopColor='#ee25f7'/>
                            <stop offset="50%" stopColor='#560bad'/>
                            <stop offset="100%" stopColor='#294fb6'/>
                            </linearGradient>
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"></path> </g></svg>
                    </div>
                    <h2>Invite new team member</h2>
                </div>
            </div>
            <div className={`${styles.scheduleContainer} ${styles.gridBlock}`}></div>
            <div className={`${styles.reportContainer} ${styles.gridBlock}`}></div>
    </div>
    </div>
    
  )
}

export default Dashboard