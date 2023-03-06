import React from 'react'
import styles from './SlickMenu.module.css'

function SlickMenu() {
  return (
    <div className={styles.menuWrapper}>
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Films' src={films} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Films</div>
                </div>
            </div>
            </li>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Something' src={something} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Something</div>
                </div>
            </div>
            </li>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Vinyls' src={vinyls} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Vinyls</div>
                </div>
            </div>
            </li>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Moods' src={moods} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Moods</div>
                </div>
            </div>
            </li>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Memories' src={memories} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Memories</div>
                </div>
            </div>
            </li>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Running' src={running} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Running</div>
                </div>
            </div>
            </li>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Music' src={music} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Music</div>
                </div>
            </div>
            </li>
            <li className={styles.menuItem}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemPad}>
                <div className={styles.outerCircle}>
                    <img alt='on Reading' src={reading} height={77} width={77}/>
                </div>
                <div className={styles.menuTitle}>on Reading</div>
                </div>
            </div>
            </li>
        </ul>
    </div>
  )
}

export default SlickMenu
