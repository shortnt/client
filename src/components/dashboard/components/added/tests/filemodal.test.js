import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import AddFileModal from "../AddFileModal";
import React from "react";

test("Should render AddFileModal",()=>{
    render(<AddFileModal />);
    const addElement = screen.getByText("Add File");
    const buttonElement = screen.getByRole("button");
    expect(addElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
})