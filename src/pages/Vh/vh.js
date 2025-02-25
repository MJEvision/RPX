import React, { useState } from "react";
import Header from "../../components/Header/header";
import arrow from "../../assets/img/arrow.svg";
import styles from "./vh.module.css";

const Vh = () => {
    const [vh, setVh] = useState("");
    const [pxInput, setPxInput] = useState(""); 
    const [showAlert, setShowAlert] = useState(false); // 🔹 알림창 상태 추가

    const handlePxChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, ""); 
        setPxInput(value); 

        const numericPx = parseFloat(value);
        const windowHeight = document.documentElement.clientHeight; 

        if (!isNaN(numericPx)) {
            const vhValue = ((numericPx / windowHeight) * 100).toFixed(0);
            setVh(vhValue);  
        } else {
            setVh("");  
        }
    };

    const handleCopy = () => {
        if (vh) {
            navigator.clipboard.writeText(`${vh}`).then(() => {
                setShowAlert(true); // 🔹 알림창 보이게 설정
                setTimeout(() => setShowAlert(false), 2000); // 🔹 2초 후 자동 숨김
            });
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.text}>PX to VH</div>
                <div className={styles.text2}>
                    픽셀(px) 단위를 뷰포트 높이(vh) 단위로 변환해 줍니다.
                    뷰포트 높이란, 현재 화면(브라우저)의 높이를 기준으로 한 상대적인 단위입니다.
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
                        value={vh}
                        readOnly
                        onClick={handleCopy} // 🔹 클릭 시 복사 실행
                        className={styles.input}
                    />
                    <div className={styles.text4}>VH</div>
                </div>
            </div>
            <footer className={styles.footer}>
                © {new Date().getFullYear()} RPXWebsite. All Rights Reserved.
            </footer>

            {/* 🔹 CSS로 꾸민 알림창 */}
            <div className={`${styles.alertBox} ${showAlert ? styles.show : ""}`}>
                변환 값이 복사되었습니다!
            </div>
        </>
    );
};

export default Vh;