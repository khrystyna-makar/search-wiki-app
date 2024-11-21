import { fn } from '@storybook/test';

import Input from './';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    placeholder: 'Search data',
  },
};