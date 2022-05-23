import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import TextModal from "../TextModal";
import React from "react";

test("Should render AddFileModal",()=>{
    render(<TextModal />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe("Text");
    expect(buttonElement).toHaveStyle({
        color: "green",
    });
})