
import { Col, Row } from "react-bootstrap";

export const CertificatesCard = ({ başlık, verenKuruluş, sertifikaLinki }) => {
    return (
        <Col size={12} sm={6} md={12} className="certificates">
            <a href={sertifikaLinki}>
                <Row className="g-2 mb-4 align-items-center  border-2  rounded-3 certificates-border">
                    <Col size={12} sm={6} md={12} className="d-flex justify-content-between">
                        <div className="certificates-baslik">
                            <h5 className="mb-0">{başlık}</h5>
                        </div>
                        <div className="certificates-link">
                            <a>{verenKuruluş}</a>
                        </div>
                    </Col>
                </Row>
            </a>
        </Col>
    )
}



