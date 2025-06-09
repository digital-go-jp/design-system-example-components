import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageSelectorGlobeIcon } from './GlobeIcon';

const meta = {
  id: 'Component/DADS v2/LanguageSelector/Parts/GlobeIcon',
  title: 'Component/ランゲージセレクター/Parts/GlobeIcon',
  component: LanguageSelectorGlobeIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelectorGlobeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
