// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button } from 'react-bootstrap';

// function Admin() {
//     const [baslik, setBaslik] = useState('');
//     const [aciklama, setAciklama] = useState('');
//     const [imgUrl, setImgUrl] = useState('');
//     const [dil, setDil] = useState('');
//     const [githubLink, setGithubLink] = useState('');

//     const writeToJSON = async (data) => {
//         try {
//             const response = await axios.post('./proje.json', { proje: data });
//             console.log(response.data); // İsteğin başarı durumunu kontrol etmek için yanıtı konsola yazdırabilirsin
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = {
//             baslik,
//             aciklama,
//             imgUrl,
//             dil,
//             githubLink,
//         };
//         writeToJSON(data);
//     };


//     return (
//         <div className="container">
//             <Form className="mt-5" onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>Başlık</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={baslik}
//                         onChange={(e) => setBaslik(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Açıklama:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={aciklama} 
//                         onChange={(e) => setAciklama(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Resim URL:</Form.Label>
//                     <Form.Control 
//                         type="text" 
//                         value={imgUrl} 
//                         onChange={(e) => setImgUrl(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Dil:</Form.Label>
//                     <Form.Control 
//                         type="text" 
//                         value={dil} 
//                         onChange={(e) => setDil(e.target.value)}
//                     />
//                 </Form.Group>                
//                 <Form.Group>
//                     <Form.Label>Github Linki:</Form.Label>
//                     <Form.Control 
//                         type="text" 
//                         value={githubLink} 
//                         onChange={(e) => setGithubLink(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" className="mt-3">
//                     Ekle
//                 </Button>

                
//             </Form>
//         </div>
//     );
// }

// export default Admin;







import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function Admin() {
  const [baslik, setBaslik] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [dil, setDil] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const API_ENDPOINT = 'http://localhost:3000/proje';


  const writeToJSON = async (data) => {
    try {
      const response = await axios.post('API_ENDPOINT', { proje: data });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      baslik,
      aciklama,
      imgUrl,
      dil,
      githubLink,
    };
    writeToJSON(data);
  };

  return (
    <div className="container">
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            type="text"
            value={baslik}
            onChange={(e) => setBaslik(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Açıklama:</Form.Label>
          <Form.Control
            type="text"
            value={aciklama}
            onChange={(e) => setAciklama(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Resim URL:</Form.Label>
          <Form.Control
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dil:</Form.Label>
          <Form.Control
            type="text"
            value={dil}
            onChange={(e) => setDil(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Github Linki:</Form.Label>
          <Form.Control
            type="text"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Ekle
        </Button>
      </Form>
    </div>
  );
}

export default Admin;
