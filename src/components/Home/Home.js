import React from 'react';
import Banner from './Banner/Banner';
import styles from '../../styles/Home/Home.module.scss';

function Home() {
    return (
        <div data-testid='Home' className={styles.Home}>
            <Banner />

            <div className='container mx-auto'>
                <div className={styles.stories}>
                    <div className='pt-0'>
                        <h1 className='uppercase'>Popular Stories </h1>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 pt-10 pl-10 pr-10">
                        <div className={styles.grid}>
                            <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€1`} className='object-fill' />
                            </div>

                            <div className='pt-5 pb-5 pl-5 pr-5'>

                                <div className={`${styles.gridContent} text-center`}>
                                    <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                                    <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                                    <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                </div>

                            </div>
                        </div>

                        <div className={styles.grid}>
                            <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€2`} className='object-fill' />
                            </div>

                            <div className='pt-5 pb-5 pl-5 pr-5'>

                                <div className={`${styles.gridContent} text-center`}>
                                    <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                                    <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                                    <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                </div>

                            </div>
                        </div>

                        <div className={styles.grid}>
                            <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€3`} className='object-fill' />
                            </div>

                            <div className='pt-5 pb-5 pl-5 pr-5'>

                                <div className={`${styles.gridContent} text-center`}>
                                    <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                                    <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                                    <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.viewSection}>
                    <div className={styles.stories}>
                        <div className="grid lg:grid-cols-2 gap-6 pt-10 pl-10 pr-10">

                            <div className={`${styles.grid} col-span-2`}>
                                <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                                    <img src={`${process.env.REACT_APP_IMG_URL}/?office&€1`} className='object-fill' />
                                </div>

                                <div className='pt-5 pb-5 pl-5 pr-5'>

                                    <div className={`${styles.gridContent} text-center`}>
                                        <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                                        <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                                        <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                    </div>

                                </div>
                            </div>

                            <div>
                                132132
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </div>
    )
}

export default Home