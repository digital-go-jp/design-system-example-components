import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageSelectorArrowIcon } from './ArrowIcon';

const meta = {
  id: 'Component/DADS v2/LanguageSelector/Parts/ArrowIcon',
  title: 'Component/ランゲージセレクター/Parts/ArrowIcon',
  component: LanguageSelectorArrowIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelectorArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
