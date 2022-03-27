import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";

describe('<TextInput />', () => {
  it('should invoke onChange when input change input value', () => {
    const onChange = jest.fn();

    render(
      <TextInput 
        value=""
        onChange={onChange}
        label="Email"
      />,
    );

    userEvent.type(screen.getByLabelText(/email/i), 'Z');

    expect(onChange).toBeCalledWith('Z');
  });

  it('should pass value to input', () => {
    render(
      <TextInput 
        value="Hello world"
        onChange={() => {}}
        label="Email"
      />,
    );

    const value = screen.getByLabelText(/email/i).getAttribute('value');

    expect(value).toEqual('Hello world');
  });

  it('should floating label text on input focused', () => {
    render(
      <TextInput
        value="Hello world"
        onChange={() => {}}
        label="Email"
      />
    );
    
    fireEvent.focus(screen.getByLabelText(/email/i));

    const labelText = screen.getByText(/email/i);

    expect(labelText).toHaveStyle({
      fontSize: '12px',
      transform: 'translateY(-50%)',
    });
  });

  it('should highlighted on input focused', () => {
    render(
      <TextInput
        value="Hello world"
        onChange={() => {}}
        label="Email"
      />
    );
    
    fireEvent.focus(screen.getByLabelText(/email/i));

    expect(screen.getByText(/email/i)).toHaveStyle({
      color: '#3732a0',
    });

    expect(screen.getByTestId('WRAPPER')).toHaveStyle({
      borderColor: '#3732a0',
    });
  });

  it('should reset highlight on input blurred', () => {
    render(
      <TextInput
        value="Hello world"
        onChange={() => {}}
        label="Email"
      />
    );
    
    fireEvent.focus(screen.getByLabelText(/email/i));
    fireEvent.blur(screen.getByLabelText(/email/i));

    expect(screen.getByText(/email/i)).not.toHaveStyle({
      color: '#3732a0',
    });

    expect(screen.getByTestId('WRAPPER')).not.toHaveStyle({
      borderColor: '#3732a0',
    });
  });

  it('should errored when error', () => {
    render(
      <TextInput
        value="Hello world"
        onChange={() => {}}
        label="Email"
        error
      />
    );
    
    fireEvent.focus(screen.getByLabelText(/email/i));

    expect(screen.getByText(/email/i)).toHaveStyle({
      color: '#d14343',
    });

    expect(screen.getByTestId('WRAPPER')).toHaveStyle({
      borderColor: '#d14343',
    });
  });

  it('should render errorMessage when error', () => {
    render(
      <TextInput
        value="Hello world"
        onChange={() => {}}
        label="Email"
        error
        errorMessage="Please input your email"
      />
    );

    expect(screen.getByText('Please input your email')).toBeInTheDocument();
  });

  it('should not render errorMessage when there is no error', () => {
    render(
      <TextInput
        value="Hello world"
        onChange={() => {}}
        label="Email"
        errorMessage="Please input your email"
      />
    );

    expect(screen.queryByText('Please input your email')).not.toBeInTheDocument();
  });
});
