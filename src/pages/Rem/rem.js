import React, { useState } from "react";
import Header from "../../components/Header/header";
import arrow from "../../assets/img/arrow.svg";
import styles from "./rem.module.css";

const Rem = () => {
    const [rem, setRem] = useState("");
    const [pxInput, setPxInput] = useState("");
    
    const baseFontSize = 16;

    const handlePxChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, ""); 
        setPxInput(value); 

        const numericPx = parseFloat(value);
        
        if (!isNaN(numericPx)) {
            const remValue = Math.floor(numericPx / baseFontSize).toString();
            setRem(remValue);  
        } else {
            setRem("");  
        }
    };

    const handleCopy = () => {
        if (rem) {
            navigator.clipboard.writeText(`${rem}`);
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.text}>PX to REM</div>
                <div className={styles.text2}>
                    픽셀(px) 단위를 rem 단위로 변환해 줍니다.
                    rem 단위란, 최상위 HTML 요소의 폰트 크기를 기준으로 한 상대적인 단위입니다.
                </div>
                <div className={styles.converter}>
                    <input
                        type="text"
                        value={pxInput}
                        onChange={handlePxChange}
                        placeholder="예: 100px"
                        className={styles.input}
                    />
                    <div className={styles.text3}>PX</div>
                    <img src={arrow} alt="Arrow" className={styles.arrow} />
                    <input
                        type="text"
                        value={rem}
                        readOnly
                        onClick={handleCopy}
                        className={styles.input}
                    />
                    <div className={styles.text4}>REM</div>
                </div>
            </div>
            <footer className={styles.footer}>
                © {new Date().getFullYear()} RPXWebsite. All Rights Reserved.
            </footer>
        </>
    );
};

export default Rem;
