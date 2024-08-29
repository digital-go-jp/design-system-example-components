import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelectorGlobeIcon } from './GlobeIcon';

const meta = {
  title: 'Component/DADS v2/LanguageSelector/Parts/GlobeIcon',
  component: LanguageSelectorGlobeIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelectorGlobeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
