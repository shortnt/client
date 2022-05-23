import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import FilesComponent from "../FilesComponent";
import React from 'react';

test("Should render Files Component",()=>{
    render(<FilesComponent />);
    const buttonElement = screen.getByRole("button");
    const openButton = screen.getByText("Open");
    const deleteButton = screen.getByText("Delete");
    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toBeInTheDocument();
    expect(openButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
})