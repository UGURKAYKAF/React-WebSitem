import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/ben2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End Developer", "Back-End Developer", "Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility >
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Uğur KAYKAF`}</h1>
                  <h2>
                    <span className="txt-rotate" data-period="1000" data-rotate='[ "Front-End Developer", "Back-End Developer", "Full Stack Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>Her zaman ve her alanda yeni bilgiler öğrenmeye hevesli, bilgisayar programcılığı ön lisansı tamamlamış bir programcıyım. İyi ve yaratıcı bir yazılımcı olmak çocukluğumdan beri hayalimdi. Takım çalışması ve takım arkadaşlarıma fikir alışverişi konularında kendime güveniyorum. Ayrıca yazılım konularındaki bakış açısı olarak çalıştığım arkadaşlarıma ve şirketime farklı vizyonlar katabileceğimi düşünüyorum.</p>
                  <div class="d-flex align-items-center">
                    <a href="/cv/UĞUR KAYKAF.pdf" target="_blank" class="btn btn-lg-square btn-outline-danger text-light border-2 mx-1">Download
                      CV</a>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

