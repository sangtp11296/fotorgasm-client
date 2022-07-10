import React, { useState, useEffect, useCallback } from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'
import HamButton from './HamButton'

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            isOpen: false,
            isSearched: false}
    }
    widthDetect = () => {
        this.setState({
            width:window.innerWidth,
            isOpen: false});
    }
    openMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            isSearched: false})
    }
    openSearch = () => {
        this.setState({
            isSearched: !this.state.isSearched,
            isOpen: false
        })
        
    }
    componentDidMount(){
        window.addEventListener('resize', this.widthDetect)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.widthDetect)
    }
    render() {
        return (
            <header className={`${styles.header}`}>
                <div className={styles.topNav}>
                    <div className={styles.logo}>
                        <Link to='/' className={styles.mainLogo}>
                            <img alt='s-room' style={{height:40}} src='/images/brand/S-Room-Logo.png'></img>
                        </Link>
                    </div>
                    <HamButton handleToggle={this.openMenu} stateOpen={this.state.isOpen}></HamButton>
                    <nav className={`${styles.mainMenu} ${this.state.isOpen ? styles.openMenu : ''}`}>
                        <ul className={styles.mainNav}>
                            <li className={styles.item}>Photobook</li>
                            <li className={styles.item}>Bookshelf</li>
                            <li className={styles.item}>Walkman</li>
                            <li className={styles.item}>Notes</li>
                            <li className={styles.item}>Exhibition</li>
                            <li className={styles.item}>Magazine</li>
                            {this.width<=990 ? <li className={`${styles.item} ${styles.itemQuotes}`}>© 2022 S-ROOM - THE PERSONAL ROOM LTD.</li>:''}
                            {this.width<=990 ? 
                                <div className={styles.socialIcon}>
                                    <a href='https://www.facebook.com/sang.tp.11296' rel="noopener noreferrer">
                                        <i className="fab fa-facebook-square fa-2x"></i>
                                    </a>
                                    <a href='https://www.instagram.com/nguoidiban.mua/' rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                </div>:''}
                        </ul>
                    </nav>
                    <button className={`${styles.searchIcon}  ${this.state.isSearched?styles.openSearch:''}`} onClick={this.openSearch}></button>
                    <div className={`${styles.searchBox}`} style={{display:`${this.state.isSearched?'':'none'}`}}  id='search'>
                        <div className={styles.central}>
                            <div className={styles.content}>
                                <form method='get' action='/en/search'>
                                    <label htmlFor='search-element'>Search for</label>
                                    <div className={styles.searchInput}>
                                        <input type='search' id='search-element' name='q' autoComplete='off'></input>
                                    </div>
                                </form>
                                <p className={styles.label}>Recent searches</p>
                                <ul className={styles.list}></ul>
                            </div>
                        </div>
                    </div>
                    {this.state.width>990 ? 
                                <div className={styles.socialIcon}>
                                    <a  href='https://www.facebook.com/sang.tp.11296' rel="noopener noreferrer">
                                        <i className="fab fa-facebook-square fa-2x"></i>
                                    </a>
                                    <a  href='https://www.instagram.com/nguoidiban.mua/' rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                </div>:''}
                    <div className={styles.dotMenu}>
                        <div className={`${styles.hiddenBox} ${styles.hide}`}>
                            <ul className={styles.boxMenu}>
                                <li className={styles.dotItem}>Login</li>
                                <li className={styles.dotItem}>中文</li>
                                <li className={styles.dotItem}>Vietnamese</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
          )
    }
}

