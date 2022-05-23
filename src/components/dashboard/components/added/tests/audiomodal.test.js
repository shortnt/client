import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AudioModal from "../AudioModal";
import React from 'react';

test("Should display audio modal",()=>{
    render(<AudioModal />);
    const buttonElement = screen.getByRole("button");
    const addElement = screen.getByText("Audio");
    expect(addElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
        color: "red"
    })
})