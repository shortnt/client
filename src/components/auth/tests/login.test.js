import Login from "../Login";
import {render,screen} from "@testing-library/react";

test("Login test",()=>{
    render(<Login />);
    expect(true).toBeTruthy();
})