import React from 'react'
import styles from './SlickMenu.module.css'
import './SlickMenu.css'
import films from '../../../images/menu/on Films.png'
import something from '../../../images/menu/on Something.png'
import vinyls from '../../../images/menu/on Vinyls.png'
import moods from '../../../images/menu/on Moods.png'
import memories from '../../../images/menu/on Memories.png'
import running from '../../../images/menu/on Running.png'
import music from '../../../images/menu/on Music.png'
import reading from '../../../images/menu/on Reading.png'
import Slider from 'react-slick'

function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
        <i className="fa fa-chevron-left" />
      </div>
    );
  }
  
  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next-arrow" onClick={onClick}>
        <i className="fa fa-chevron-right" />
      </div>
    );
  }
function SlickMenu() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        swipeToSlide: true,
    }
  return (
        <Slider {...settings}>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Films' src={films} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Films</div>
                </div>
            </li>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Something' src={something} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Something</div>
                </div>
            </li>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Vinyls' src={vinyls} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Vinyls</div>
                </div>
            </li>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Moods' src={moods} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Moods</div>
                </div>
            </li>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Memories' src={memories} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Memories</div>
                </div>
            </li>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Running' src={running} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Running</div>
                </div>
            </li>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Music' src={music} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Music</div>
                </div>
            </li>
            <li className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Reading' src={reading} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Reading</div>
                </div>
            </li>
        </Slider>
  )
}

export default SlickMenu
