// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  // Using the "it" function. In the first argument, a string declares what is being tested. 
  // In the second argument, a callback function runs the test.
  it('renders', () => {
    render(<About />);
  });
  
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})
