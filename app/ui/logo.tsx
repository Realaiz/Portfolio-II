import styles from './logo.module.css'
import React from 'react';

export default async function Logo() {
    const total = 360 * 3; //create variable total that is = 1080
    const particles = []; //empty array that stored each <div/> 

    for (let i = 0; i < total; i++) {
        particles.push(<div key={i} className={styles.particle} style={{ '--index': total - i } as React.CSSProperties}></div>);
        //add to the end of the particles array a div with key i, inline styles per particle from the css file
    }

    return <div className={styles.center} style={{ '--total': total } as React.CSSProperties}>{particles}</div>;
};

