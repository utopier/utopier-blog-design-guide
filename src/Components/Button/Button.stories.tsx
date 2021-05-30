import React from 'react';
import Button,{ButtonProps} from './Button';
import {Meta,Story} from '@storybook/react';

export default {
  title: 'components|Button',
  component: Button,

  decorators: [
    (Story) => (
      <div style={{ margin: '3em'}}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});

Primary.storyName = 'PrimaryButton'

export const Secondary = Template.bind({});