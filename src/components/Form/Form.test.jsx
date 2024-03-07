import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("depends on the condition button activeness", async () => {
  const user = userEvent.setup();

  // arrange
  render(<Form />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // checkbox is empty
  expect(checkbox).not.toBeChecked();
  // button disabled
  expect(button).toBeDisabled();
  // checkbox click
  await user.click(checkbox);
  // button enabled
  expect(button).toBeEnabled();
  // checkbox tick remove
  await user.click(checkbox);
  // button disabled
  expect(button).toBeDisabled();
});

test("confirm button hover show p", async () => {
  const user = userEvent.setup();

  render(<Form />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const popup = screen.getByText(/you will/i);

  // const popup = screen.getByText("You will", { exact: false });

  // checkbox checked
  await user.click(checkbox);
  // notifications should not be shown
  expect(popup).not.toBeVisible();
  // button hover
  fireEvent.mouseEnter(button);
  // popup show
  expect(popup).toBeVisible();
  // button hover leave
  fireEvent.mouseLeave(button);
  // popup hidden
  expect(popup).not.toBeVisible();
});
