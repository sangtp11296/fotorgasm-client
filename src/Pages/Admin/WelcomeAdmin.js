import React, { useRef, useState } from 'react'
import styles from './WelcomeAdmin.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function WelcomeAdmin() {
  const [sign, setSign] = useState('signin');
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);


  const userRef = useRef();
  const passRef = useRef();
  const repassRef = useRef();

  const handleSubmit = async (event) =>{
    event.preventDefault();
    setError(false);
    setPassError(false);
    try{
      if (passRef.current.value === repassRef.current.value){
        const res = await axios.post('https://w9esxs9q88.execute-api.ap-southeast-1.amazonaws.com/dev/register',{
          username: userRef.current.value,
          password: passRef.current.value
        });
        res.data && window.location.reload();
      } else {
        setPassError(true);
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }
  return (
    <div className={styles.welcomeAdmin}>
      <div className={styles.welcomeAdminContainer}>
        <Link to='/' className={styles.brandName}>
            <img width='150px' className={styles.logoBrand} src='/images/brand/fotorgasm-brand-name-white.png'></img>
        </Link>
        <div className={styles.detailInput}>
          <h1>Welcome Back</h1>
          <h2>Hope you have a good day!</h2>
          <div className={styles.signInUp}>
            <button type='button' className={sign === 'signin' ? styles.active : ''} onClick={()=>setSign('signin')}>Sign In</button>
            <button className={sign === 'signup' ? styles.active : ''} onClick={()=>setSign('signup')} type='button'>Sign Up</button>
          </div>
          <form onSubmit={handleSubmit} className={`${styles.signForm} ${sign === 'signup'&& styles.signUp}`}>
            {
              sign === 'signin' ?
              <>
                <div className={styles.formInput}>
                  <div className={styles.iconContainer} style={{borderRight:'2px solid var(--on-separate)'}}>
                    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path className="st0" d="M256,265.308c73.252,0,132.644-59.391,132.644-132.654C388.644,59.412,329.252,0,256,0 c-73.262,0-132.643,59.412-132.643,132.654C123.357,205.917,182.738,265.308,256,265.308z"></path> <path className="st0" d="M425.874,393.104c-5.922-35.474-36-84.509-57.552-107.465c-5.829-6.212-15.948-3.628-19.504-1.427 c-27.04,16.672-58.782,26.399-92.819,26.399c-34.036,0-65.778-9.727-92.818-26.399c-3.555-2.201-13.675-4.785-19.505,1.427 c-21.55,22.956-51.628,71.991-57.551,107.465C71.573,480.444,164.877,512,256,512C347.123,512,440.427,480.444,425.874,393.104z"></path> </g> </g></svg>
                  </div>
                  <div className={styles.inputContainer}>
                    <h4>Username</h4>
                    <input ref={userRef} type='text' id='username' name='username' maxLength='30'></input>
                  </div>
                  <div className={styles.checkerContainer}>
                    <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="check-a" d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"></path> <path id="check-c" d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"></path> </defs> <g fill="none" fillRule="evenodd" transform="rotate(-90 11 7)"> <g transform="translate(1 1)"> <mask id="check-b" fill="#ffffff"> <use xlinkHref="#check-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#check-a"></use> <g fill="#4361ee" mask="url(#check-b)"> <rect width="24" height="24" transform="translate(-7 -5)"></rect> </g> </g> <mask id="check-d" fill="#ffffff"> <use xlinkHref="#check-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#check-c"></use> <g fill="#f72585" mask="url(#check-d)"> <rect width="24" height="24" transform="translate(-6 -4)"></rect> </g> </g> </g></svg>
                  </div>
                </div>
                <button className={styles.button} type='submit'>Continue</button>
              </> :
              <>
                <div className={styles.formInput}>
                <div className={styles.iconContainer} style={{borderRight:'2px solid var(--on-separate)'}}>
                  <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path className="st0" d="M256,265.308c73.252,0,132.644-59.391,132.644-132.654C388.644,59.412,329.252,0,256,0 c-73.262,0-132.643,59.412-132.643,132.654C123.357,205.917,182.738,265.308,256,265.308z"></path> <path className="st0" d="M425.874,393.104c-5.922-35.474-36-84.509-57.552-107.465c-5.829-6.212-15.948-3.628-19.504-1.427 c-27.04,16.672-58.782,26.399-92.819,26.399c-34.036,0-65.778-9.727-92.818-26.399c-3.555-2.201-13.675-4.785-19.505,1.427 c-21.55,22.956-51.628,71.991-57.551,107.465C71.573,480.444,164.877,512,256,512C347.123,512,440.427,480.444,425.874,393.104z"></path> </g> </g></svg>
                </div>
                <div className={styles.inputContainer}>
                  <h4>Username</h4>
                  <input required ref={userRef} type='text' id='username' name='username' maxLength='30'></input>
                </div>
                <div className={styles.checkerContainer}>
                  <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="check-a" d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"></path> <path id="check-c" d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"></path> </defs> <g fill="none" fillRule="evenodd" transform="rotate(-90 11 7)"> <g transform="translate(1 1)"> <mask id="check-b" fill="#ffffff"> <use xlinkHref="#check-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#check-a"></use> <g fill="#4361ee" mask="url(#check-b)"> <rect width="24" height="24" transform="translate(-7 -5)"></rect> </g> </g> <mask id="check-d" fill="#ffffff"> <use xlinkHref="#check-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#check-c"></use> <g fill="#f72585" mask="url(#check-d)"> <rect width="24" height="24" transform="translate(-6 -4)"></rect> </g> </g> </g></svg>
                </div>
                </div>
                <div className={styles.formInput}>
                  <div className={`${styles.iconContainer} ${styles.password}`} style={{borderRight:'2px solid var(--on-separate)'}}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 2V22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M11.0941 12H11.1031" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M7.09412 12H7.1031" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                  </div>
                  <div className={styles.inputContainer}>
                    <h4>Password</h4>
                    <input required ref={passRef} type='password' id='password' name='password' maxLength='30'></input>
                  </div>
                  <div className={styles.checkerContainer}>
                    <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="check-a" d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"></path> <path id="check-c" d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"></path> </defs> <g fill="none" fillRule="evenodd" transform="rotate(-90 11 7)"> <g transform="translate(1 1)"> <mask id="check-b" fill="#ffffff"> <use xlinkHref="#check-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#check-a"></use> <g fill="#4361ee" mask="url(#check-b)"> <rect width="24" height="24" transform="translate(-7 -5)"></rect> </g> </g> <mask id="check-d" fill="#ffffff"> <use xlinkHref="#check-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#check-c"></use> <g fill="#f72585" mask="url(#check-d)"> <rect width="24" height="24" transform="translate(-6 -4)"></rect> </g> </g> </g></svg>
                  </div>
                </div>
                <div className={styles.formInput}>
                  <div className={`${styles.iconContainer} ${styles.password}`} style={{borderRight:'2px solid var(--on-separate)'}}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.02 4.5H16.5C17.12 4.5 17.67 4.52 18.16 4.59C20.79 4.88 21.5 6.12 21.5 9.5V14.5C21.5 17.88 20.79 19.12 18.16 19.41C17.67 19.48 17.12 19.5 16.5 19.5H15.02" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 2V22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.0945 12H11.1035" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7.09448 12H7.10346" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                  </div>
                  <div className={styles.inputContainer}>
                    <h4>Re-Password</h4>
                    <input required ref={repassRef} type='password' id='password' name='password' maxLength='30'></input>
                  </div>
                  <div className={styles.checkerContainer}>
                    <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="check-a" d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"></path> <path id="check-c" d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"></path> </defs> <g fill="none" fillRule="evenodd" transform="rotate(-90 11 7)"> <g transform="translate(1 1)"> <mask id="check-b" fill="#ffffff"> <use xlinkHref="#check-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#check-a"></use> <g fill="#4361ee" mask="url(#check-b)"> <rect width="24" height="24" transform="translate(-7 -5)"></rect> </g> </g> <mask id="check-d" fill="#ffffff"> <use xlinkHref="#check-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#check-c"></use> <g fill="#f72585" mask="url(#check-d)"> <rect width="24" height="24" transform="translate(-6 -4)"></rect> </g> </g> </g></svg>
                  </div>
                </div>
                <button className={styles.button} type='submit'>Sign Up</button>
              </>
            }
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default WelcomeAdmin