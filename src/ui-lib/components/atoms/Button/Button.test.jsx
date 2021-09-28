import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Button from './Button';

test('Button', () => {

      it('should render without errors', () => {
        render(<Button title='My Button' />);
        expect(screen.getByRole('button')).toHaveTextContent(
          'My Primary Button',
        );
        expect(screen.getByRole('button')).toBeEnabled();
      });

});