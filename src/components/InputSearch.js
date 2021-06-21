import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { useDispatch } from 'react-redux';
import { searchMoviesAction } from '../redux/actions/moviesActions';




const InputSearch = () => {

    const executeReduxAction = useDispatch();
    const [searchKeyword, setSearchKeyword] = useState("");

    const searchMovies = async () => {
        try {
            const actionToExecute = searchMoviesAction(searchKeyword);
            executeReduxAction(actionToExecute);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={700}
                                height={250}
                                alt="171x180"
                                src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg"
                            />

                        </Figure>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search by keyword"
                                aria-describedby="basic-addon2"
                                onChange={event => setSearchKeyword(event.target.value)}

                            />
                            <InputGroup.Append>
                                <Button
                                    variant="outline-secondary"
                                    onClick={searchMovies}
                                >
                                    Search
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>


        </div>);
}

export default InputSearch;