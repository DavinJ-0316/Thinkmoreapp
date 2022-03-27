import { fireEvent, render, screen } from "@testing-library/react";
import Authentication from "./Authentication";

describe('<Authentication />', () => {
  it('should open login modal when click login button', () => {
    render(<Authentication />);

    expect(screen.queryByText(/Where the Exploration Begins/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', {
      name: /login/i
    }));

    expect(screen.getByText(/Where the Exploration Begins/)).toBeInTheDocument();
  });

  it('should able close login modal', () => {
    render(<Authentication />);

    fireEvent.click(screen.getByRole('button', {
      name: /login/i
    }));

    fireEvent.click(screen.getByRole('button', {
      name: /close/i
    }));

    expect(screen.queryByText(/Where the Exploration Begins/)).not.toBeInTheDocument();
  });
});
