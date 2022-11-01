import { render, fireEvent, screen } from "@testing-library/react";
import {Card} from "./";


test("Bottun action", () => {

render(<Card style={{background:'red'}}  onClick={()=>{console.log('Action Pressed!');
}}><p>Label Appear</p></Card>);


const card = screen.getByTestId("card");
console.log = jest.fn();

//interact with those element
fireEvent.click(card);

//assert the expected result
expect(card).toBeVisible()
expect(card).toHaveTextContent("Label Appear")
expect(console.log).toHaveBeenCalledWith('Action Pressed!');
expect(card).toHaveStyle('background-color:red')
});