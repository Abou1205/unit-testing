import { render, screen } from "@testing-library/react"
import Card  from '.'
import userEvent from "@testing-library/user-event";
const item = {
    name: 'Chocolate',
    imagePath: '/img/chocolate.png',
  };
  
  const basket = [
    {
      name: 'Chocolate',
      imagePath: '/img/chocolate.png',
      id: 'c3ad',
    },
    {
      name: 'Chocolate',
      imagePath: '/img/chocolate.png',
      id: 'c3ad',
    },
    {
      name: 'Vanilla',
      imagePath: '/img/vanilla.png',
      id: 'ad58',
    },
  ];
  
test("amount is appropiate for the basket data", () => {
    render(<Card item={item} basket={basket} setBasket={() => {}} />);
    
    // amount span
    const amount = screen.getByTestId('amount')

    // there a 2 chocolate in the basket
    expect(amount.textContent).toBe('2')

    // are there any element that has a text written chocalate
    screen.getByText(item.name)

    // are there any element that has a "/img/chocolate.png" text
    const image = screen.getByAltText('images')

    expect(image).toHaveAttribute('src', item.imagePath)

})

test("when clicked the buttons setMethods triggered", async() => {
    const mockFn = jest.fn()
    const user = userEvent.setup()
    render(<Card item={item} basket={basket} setBasket={mockFn} />)

    // render buttons
    const addBtn = screen.getByRole("button", { name: 'Add' })
    const resetBtn = screen.getByRole("button", { name: 'Reset' })
    
    // click the add btn
    await user.click(addBtn)

    // setMethod works with right parameters
    expect(mockFn).toHaveBeenCalledWith([...basket, item])
    
    // click reset button
    await user.click(resetBtn)

    // setMethod works with right parameters
    expect(mockFn).toHaveBeenCalledWith([{
        name: 'Vanilla',
        imagePath: '/img/vanilla.png',
        id: 'ad58'
    }])

})