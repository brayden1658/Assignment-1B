import SEPractice from './Submit-Article';
import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubmitArticle from './Submit-Article';

test("Renders the submit article page", () => {
  render(<SubmitArticle />);

    //Make sure that heading is displayed correctly according to page:
    const divArray = screen.getAllByRole("heading");
    expect(divArray[0]).toHaveTextContent("Submit Article")
   
    //Make sure textboxes are empty:
    const divArray2 = screen.getAllByRole("textbox");
    expect(divArray2[0]).toHaveTextContent("")
    expect(divArray2[1]).toHaveTextContent("")
    expect(divArray2[2]).toHaveTextContent("")
    expect(divArray2[3]).toHaveTextContent("")
    expect(divArray2[4]).toHaveTextContent("")

});