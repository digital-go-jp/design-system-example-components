import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageSelectorGlobeWithLabelIcon } from './GlobeWithLabelIcon';

const meta = {
  id: 'Component/DADS v2/LanguageSelector/Parts/GlobeWithLabelIcon',
  title: 'Component/ランゲージセレクター/Parts/GlobeWithLabelIcon',
  component: LanguageSelectorGlobeWithLabelIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelectorGlobeWithLabelIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    'aria-label': 'Language',
  },
};
