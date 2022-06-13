import SEPractice from './SE-Practice';
import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("Renders the landing page", () => {
  render(<SEPractice />);

    const divArray = screen.getAllByRole("heading");
    expect(divArray[0]).toHaveTextContent("Select a SE Practice to get evidence for the claimed benefits")
    expect(divArray[1]).toHaveTextContent("No table selected. Please select an SE Practice from the dropdown.")

    const optionArray = screen.getAllByRole("option");
    expect(optionArray[0]).toHaveTextContent("Select an SE Practice")

    // Test what elements are present
    // const divArray2 = screen.getAllByRole("dropdown");
    // expect(divArray2.length).toHaveTextContent("hello")

    

    

});