import React from 'react';
import {render, screen} from '@testing-library/react';
import Frame from '../Frame';

describe('Frame Component', () => {
    test('renders with title and content', () => {
        const title = 'Test Title';
        const content = <div>Test Content</div>;

        render(<Frame title={title} content={content}/>);

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();

        const contentElement = screen.getByText('Test Content');
        expect(contentElement).toBeInTheDocument();
    });
});
