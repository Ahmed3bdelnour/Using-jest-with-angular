import { fireEvent, render, screen } from '@testing-library/angular';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  beforeEach(async () => {
    await render(CounterComponent, { componentProperties: { counter: 5 } });
  });

  test('should render counter', () => {
    expect(screen.getByText('Current Count: 5'));
  });

  test('should increase the counter on click', () => {
    const incrementButton = screen.getByRole('button', { name: /increase/i });
    expect(incrementButton).toBeEnabled();
    fireEvent.click(incrementButton);

    expect(screen.getByText('Current Count: 6'));
  });

  test('should decrease the counter on click', () => {
    const decrementButton = screen.getByRole('button', { name: /decrease/i });
    expect(decrementButton).toBeEnabled();
    fireEvent.click(decrementButton);

    expect(screen.getByText('Current Count: 4'));
  });
});
