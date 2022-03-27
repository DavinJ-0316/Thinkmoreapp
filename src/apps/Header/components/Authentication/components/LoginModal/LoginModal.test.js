import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginModal from "./LoginModal";

describe('<LoginModal />', () => {
  it('should render password input', () => {
    render(<LoginModal open onClose={() => {}} />);
    
    expect(screen.getByLabelText('Password').getAttribute('type')).toEqual('password');
  });

  it('should render required email and password error message', () => {
    render(<LoginModal open onClose={() => {}} />);

    expect(screen.queryByText('Email address is required')).not.toBeInTheDocument();
    expect(screen.getByText('Email address')).not.toHaveStyle({
      color: '#d14343',
    });

    expect(screen.queryByText('Password is required')).not.toBeInTheDocument();
    expect(screen.getByText('Password')).not.toHaveStyle({
      color: '#d14343',
    });

    fireEvent.click(screen.getByRole('button', {
      name: 'Login'
    }));

    expect(screen.getByText('Email address is required')).toBeInTheDocument();
    expect(screen.getByText('Email address')).toHaveStyle({
      color: '#d14343',
    });

    expect(screen.getByText('Password is required')).toBeInTheDocument();
    expect(screen.getByText('Password')).toHaveStyle({
      color: '#d14343',
    });
  });

  it('should render valid email address error message', () => {
    render(<LoginModal open onClose={() => {}} />);

    expect(screen.queryByText('Must be a valid email address')).not.toBeInTheDocument();
    expect(screen.getByText('Email address')).not.toHaveStyle({
      color: '#d14343',
    });

    userEvent.type(screen.getByLabelText('Email address'), 'invalid_email_address');

    expect(screen.getByText('Must be a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Email address')).toHaveStyle({
      color: '#d14343',
    });
  });

  it('should render valid form', () => {
    render(<LoginModal open onClose={() => {}} />);

    userEvent.type(screen.getByLabelText('Email address'), 'zlong@outlook.com');
    userEvent.type(screen.getByLabelText('Password'), 'password');

    fireEvent.click(screen.getByRole('button', {
      name: 'Login'
    }));

    expect(screen.queryByText('Must be a valid email address')).not.toBeInTheDocument();
    expect(screen.getByText('Email address')).not.toHaveStyle({
      color: '#d14343',
    });
    expect(screen.queryByText('Email address is required')).not.toBeInTheDocument();
    expect(screen.getByText('Email address')).not.toHaveStyle({
      color: '#d14343',
    });

    expect(screen.queryByText('Password is required')).not.toBeInTheDocument();
    expect(screen.getByText('Password')).not.toHaveStyle({
      color: '#d14343',
    });
  });
})
