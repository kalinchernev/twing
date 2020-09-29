import button from './ecl-button.html.twig';

const iconsList = {};
iconsList.none = '';

export default {
  title: 'Components/Button',
  decorators: [],
};

export const Primary = () => {
  return button({
    label: 'Primary button',
    variant: 'primary',
    type: 'submit',
    extra_classes: '',
  });
};

Primary.storyName = 'primary';
