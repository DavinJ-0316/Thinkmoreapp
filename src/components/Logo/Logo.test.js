import { render, screen } from "@testing-library/react";
import Logo from './Logo';
import logo from './assets/logo.svg';

describe('<Logo />', () => {
  it('should render logo <img /> with src attribute', () => {
    render(<Logo />);

    const src = screen.getByAltText('Think More').getAttribute('src');

    expect(src).toEqual(logo);
  });
});
