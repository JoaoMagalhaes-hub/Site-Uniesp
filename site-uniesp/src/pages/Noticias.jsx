import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Container, Row } from 'React-bootstrap'
import { Link } from 'react-router-dom'

const Noticias = () => {
    const [noticias, setNoticias] = useState([])
    const urlBase = "http://localhost:3000"

    useEffect(() => {
        axios.get(`${urlBase}/noticias`)
        .then(response => setNoticias(response.data))
        .catch(error => console.error("Erro ao carregar a lista de notícias: ", error))
    }, [])

  return (
<Container className="py-4">
    <h2 className="mb-4"> Noticias </h2>

    <Row className="g-4">

        {
            noticias.map(noticia => (
                <Col xs={12} sm={6} md={4} key={noticia.id}>
                    <Card className="h-100 shadow-sm ">
                        <Card.Img   
                            variant="top"
                            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                            alt="Imagem da Noticia"
                            style={{ objectFit: 'cover', height: '140 px'}}
                            />

                            <Card.Body>
                                <Card.Title>{noticia.titulo}</Card.Title>
                                <Link to={`/visualiza-noticia/${noticia.id}`} className="text-decoration-none">
                                    <small> Ler mais </small>
                                </Link>
                            </Card.Body>

                    </Card>
                </Col>
            ))
        }

    </Row>

</Container>
  )
}

export default Noticias
