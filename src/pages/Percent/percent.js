import React, { useState } from "react";
import Header from "../../components/Header/header";
import arrow from "../../assets/img/arrow.svg";
import styles from "./percent.module.css";

const Percent = () => {
    const [percent, setPercent] = useState("");
    const [pxInput, setPxInput] = useState("");
    
    const baseSize = 1000;

    const handlePxChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, ""); 
        setPxInput(value); 

        const numericPx = parseFloat(value);
        
        if (!isNaN(numericPx)) {
            const percentValue = Math.floor((numericPx / baseSize) * 100).toString();
            setPercent(percentValue);  
        } else {
            setPercent("");  
        }
    };

    const handleCopy = () => {
        if (percent) {
            navigator.clipboard.writeText(`${percent}`);
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.text}>PX to %</div>
                <div className={styles.text2}>
                    픽셀(px) 단위를 % 단위로 변환해 줍니다.
                    % 단위란, 부모 요소의 크기를 기준으로 한 상대적인 단위입니다.
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
                        value={percent}
                        readOnly
                        onClick={handleCopy}
                        className={styles.input}
                    />
                        <div className={styles.text4}>%</div>
                </div>
            </div>
            <footer className={styles.footer}>
                © {new Date().getFullYear()} RPXWebsite. All Rights Reserved.
            </footer>
        </>
    );
};

export default Percent;
