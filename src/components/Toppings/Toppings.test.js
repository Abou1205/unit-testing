import { render, screen } from "@testing-library/react"
import Toppings from "."
import userEvent from "@testing-library/user-event"

test("render cards from given api", async() => {
    render(<Toppings />)

    const image = await screen.findAllByAltText('topping-img')

    expect(image.length).toBeGreaterThanOrEqual(0)
})

test("impact of adding and removing toppings on the total price ", async () => {
    const user = userEvent.setup();
    render(<Toppings />)

    // total price
    const total = screen.getByTestId('total')

    // all toppings
    const toppings = await screen.findAllByRole('checkbox')

    // total price 0
    expect(total.textContent).toBe("0")
    // click the first topping
    await user.click(toppings[0])
    // total price 3
    expect(total.textContent).toBe("3")
    // click other topping
    await user.click(toppings[3])
    // total price 6
    expect(total.textContent).toBe("6")
    // click the topping that clicked
    await user.click(toppings[0])
    // total 3
    expect(total.textContent).toBe("3")
    // click the topping that clicked
    await user.click(toppings[3])
    // total 0
    expect(total.textContent).toBe("0")
})