import App from "./App";
import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("Renders the landing page", () => {
  render(<App />);

    const divArray = screen.getAllByText(/App/);
    expect(divArray[0]).toHaveTextContent("Welcome to the SPEED Application!")
    expect(divArray[1]).toHaveTextContent("This is the Home Page of the SPEED Application. This is a work in progress!")

});