import React, { useState } from "react";
import Header from "../../components/Header/header";
import arrow from "../../assets/img/arrow.svg";
import styles from "./vw.module.css";

const Vw = () => {
    const [vw, setVw] = useState("");
    const [pxInput, setPxInput] = useState("");

    const handlePxChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, ""); 
        setPxInput(value); 

        const numericPx = parseFloat(value);
        const windowWidth = document.documentElement.clientWidth; 

        if (!isNaN(numericPx)) {
            const vwValue = Math.floor((numericPx / windowWidth) * 100);
            setVw(vwValue.toString());  
        } else {
            setVw("");  
        }
    };

    const handleCopy = () => {
        if (vw) {
            navigator.clipboard.writeText(`${vw}`);
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.text}>PX to VW</div>
                <div className={styles.text2}>
                    픽셀(px) 단위를 뷰포트 너비(vw) 단위로 변환해 줍니다.
                    뷰포트 너비란, 현재 화면(브라우저)의 너비를 기준으로 한 상대적인 단위입니다.
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
                        value={vw}
                        readOnly
                        onClick={handleCopy}
                        className={styles.input}
                    />
                    <div className={styles.text4}>VW</div>
                </div>
            </div>
            <footer className={styles.footer}>
                © {new Date().getFullYear()} RPXWebsite. All Rights Reserved.
            </footer>
        </>
    );
};

export default Vw;