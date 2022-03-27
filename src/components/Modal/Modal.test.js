import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe('<Modal />', () => {
  it('should render nothing when open is false', () => {
    const { container } = render(
      <Modal onClose={() => {}}>
        This is a Modal
      </Modal>,
    )

    expect(container).toBeEmptyDOMElement();
  });

  it('should render something with children when open is true', () => {
    const { container } = render(
      <Modal open onClose={() => {}}>
        This is a Modal
      </Modal>,
    )

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.getByText('This is a Modal')).toBeInTheDocument();
  });

  it('should invoke onClose when click close button', () => {
    const onClose = jest.fn();
    
    render(
      <Modal open onClose={onClose}>
        This is a Modal
      </Modal>,
    )

    const closeButton = screen.getByRole('button', {
      name: /close/i
    });

    fireEvent.click(closeButton);
    expect(onClose).toBeCalled();
  });
});
