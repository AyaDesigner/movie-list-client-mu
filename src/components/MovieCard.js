import React from 'react';
import Card from 'react-bootstrap/Card';



export default function MoviesList({ movie }) {

    return (
        <Card style={{ flex: 1, width: '20rem', height: '100%', color: '#282c34', padding: '1rem', margin: '1rem' }}>
            <Card.Img
                variant="top"
                src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title}
                </Card.Title>
                <Card.Subtitle
                    style={{ marginBottom: '1rem' }}>
                    {movie.Director}
                </Card.Subtitle>
                <Card.Text
                    style={{ fontSize: '1rem' }}>
                    {movie.Plot}
                </Card.Text>
            </Card.Body>
        </Card>);
}

