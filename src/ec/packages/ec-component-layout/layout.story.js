import layout from './ecl-layout.html.twig';

export default {
  title: 'Components/Layout',
  decorators: [],
};

export const Default = () => layout({ component: 'button' });

Default.storyName = 'default';
