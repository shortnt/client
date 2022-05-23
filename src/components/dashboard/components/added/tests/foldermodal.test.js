import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import AddFolderModal from "../AddFolderModal";
import React from 'react';

test("Should display folder modal",()=>{
    render(<AddFolderModal data={[]} />);
    const buttonElement = screen.getByRole("button");
    const addElement = screen.getByText("ADD");
    expect(addElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
})