import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Navbar from '@components/navbar-new/navbar.component';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('Navbar', () => {
  it('renders a heading', () => {
    const mockRouter = {
      pathname: '/', // the component uses `router.push` only
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<Navbar />);

    const home = screen.getByText(/Home/i);

    expect(home).toBeInTheDocument();
    expect(home.parentElement?.classList).toContain('text-shockingYellow');
  });
});
