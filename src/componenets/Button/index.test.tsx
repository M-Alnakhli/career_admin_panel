import { render, fireEvent, screen } from "@testing-library/react";
import {Button} from "./";

//test block
test("Bottun action", () => {
// render the component on virtual dom
render(<Button color={'white'} name='testingButton' type="Submit" label={"New Label"} action={()=>{console.log('Action Pressed!');
}} />);

//select the elements you want to interact with
const button = screen.getByTestId("button");
console.log = jest.fn();

//interact with those elements
fireEvent.click(button);

//assert the expected result

expect(button).toBeVisible()
expect(button).toHaveTextContent("New Label")
// The first argument of the first call to the function was 'hello'
expect(console.log).toHaveBeenCalledWith('Action Pressed!');
});