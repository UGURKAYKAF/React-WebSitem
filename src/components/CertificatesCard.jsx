import { Col, Row } from "react-bootstrap";

export const CertificatesCard = ({ başlık, verenKuruluş, sertifikaLinki }) => {
    
    return (
        <Col size={12} sm={12} md={12} className="certificates">
            <a href={sertifikaLinki} target="_blank" rel="noopener noreferrer">
                <Row className="g-2 mb-4 p-2 align-items-center  border-2  rounded-3 certificates-border">
                    <Col size={12} sm={12} md={12} className="">
                        <div className="certificates-baslik d-flex justify-content-start">
                            <h5 className="mb-0">{başlık}</h5>
                        </div>
                        <div className="d-flex justify-content-end certificates-link ">
                            <a>{verenKuruluş}</a>
                        </div>
                    </Col>
                </Row>
            </a>
        </Col>
    )
}



