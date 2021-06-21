import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

test('that movie is passed correctly', () => {
    const movieToTest = {
        Poster: "https://someposter.jpg",
        Title: "Some title",
        Director: "John Carpenter",
        Plot: "This is the story of the Thing"
    }

    render(<MovieCard movie={movieToTest} />);

    const posterImg = screen.getByRole('img');
    expect(posterImg).toHaveAttribute('src', 'https://someposter.jpg');

    const titleString = screen.getByText(/Some title/i);
    expect(titleString).toBeInTheDocument();

    const directorString = screen.getByText(/John Carpenter/i);
    expect(directorString).toBeInTheDocument();

    const plotString = screen.getByText(/This is the story of the Thing/i);
    expect(plotString).toBeInTheDocument();

});