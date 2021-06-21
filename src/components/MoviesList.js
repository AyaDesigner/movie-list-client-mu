import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from './MovieCard';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';


export default function MoviesList() {
    const movies = useSelector((state) => state.moviesReducer);

    return (
        <div>
            <Container>
                <CardDeck>
                    <Row>
                        {movies.map(movie =>
                            <Col md={4}><MovieCard movie={movie} />                        </Col>
                        )}
                    </Row>
                </CardDeck>
            </Container>
        </div>);
}

