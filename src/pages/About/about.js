import React, { useEffect } from "react";
import styles from "./about.module.css";
import Px from "../../assets/img/Px.png";
import Px2 from "../../assets/img/Px2.png";
import Px3 from "../../assets/img/Px3.png";
import arrow from "../../assets/img/arrow.svg";
import Header from "../../components/Header/header";

const About = () => {
    useEffect(() => {
        document.body.style.zoom = "80%"; 
    }, []);
    
    return (
        <>
<div style={{ zoom: '111%' }}>
    <Header />
</div>
            <div className={styles.FrameCt}>
                <div className={styles.frame}>
                    <div className={styles.TextCt}>
                        <div className={styles.TextCt2}>
                        <div className={styles.text}>RPX</div>
                        <div className={styles.text2}>Responsive Px to Converter</div>
                    </div>
                        <div className={styles.text3}>반응형을 위한 픽셀 변환기</div>
                        <div className={styles.text4}>픽셀의 단위를 반응형으로 변환해주는 웹 사이트이므로 다양한 디바이스와 화면 크기에 맞게 자동으로 조정되는 미디어쿼리를 쉽게 구현하며 사용자가 입력한 픽셀 값을 "VH, REM, EM" 등의 단위로 변환해주는 기능으로 디자이너, 개발자 모두에게 유용한 웹 사이트입니다.</div>
                        <div className={styles.line}></div>
                        <div className={styles.text5}>설명 사진</div>
                    </div>
                        <img src={Px} alt="Px" className={styles.Px} />
                            <div className={styles.text6}>1.구성 설명</div>
                            <img src={arrow} alt="Arrow" className={styles.arrow} />
                            <img src={Px2} alt="Px2" className={styles.Px2} />
                            <div className={styles.text7}>2.구현 설명</div>
                                <img src={arrow} alt="Arrow" className={styles.arrow2} />
                        <img src={Px3} alt="Px3" className={styles.Px3} />
                        <div className={styles.text8}>3.사이드 바 설명</div>
                    <footer className={styles.footer}>
                        © {new Date().getFullYear()} RPXWebsite. All Rights Reserved.
                    </footer>
                </div>
            </div>
        </>
    );
};

export default About;