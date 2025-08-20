import { addons } from 'storybook/manager-api';

import CustomTheme from "./dadsTheme";

import "./globals.css";

addons.setConfig({
  theme: CustomTheme,
});