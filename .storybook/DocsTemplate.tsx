import { Controls, Description, Primary, Stories, Subtitle, Title, Unstyled } from '@storybook/addon-docs/blocks';
 
export const DocsTemplate = () => (
  <Unstyled>
    <div className="prose">
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <Stories includePrimary={false} />
    </div>
  </Unstyled>
  
);