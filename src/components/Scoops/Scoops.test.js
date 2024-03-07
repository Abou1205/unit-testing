import { render, screen } from "@testing-library/react"
import Scoops from "."
import userEvent from "@testing-library/user-event"

test('Render cards from given API', async() => {
    render(<Scoops />)

    // get the rendered images
    const image = await screen.findAllByAltText('images')

    // rendered images > 1
    expect(image.length).toBeGreaterThanOrEqual(1)
})

test('The impact of adding and removing ice cream on the total price', async() => {
    render(<Scoops />)

    const user = userEvent.setup();

    // call button
    const resetButton = await screen.findAllByRole("button", {name: "Reset"})
    const addButton = await screen.findAllByRole("button", { name: "Add" })
    
    const total = screen.getByTestId('total')
    

    // amount should be 0
    expect(total.textContent).toBe("0")
    // click add button
    await user.click(addButton[0])
    // amount should be 5
    expect(total.textContent).toBe("5")
    // add another ice cream
    await user.dblClick(addButton[2])
    // amount should be 15
    expect(total.textContent).toBe("15")
    // click reset button that amount is 1
    await user.click(resetButton[0])
    // amount should be 10
    expect(total.textContent).toBe("10")
    // reset the other one
    await user.dblClick(resetButton[2])
    // amount should be 0
    expect(total.textContent).toBe("0")
})