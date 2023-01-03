import { MenuItem } from '../interfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },

  {
    name: 'Alertas',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Input',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },

  {
    name: 'SectionList',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinity Scroll',
    icon: 'copy-outline',
    component: 'InfinityScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Theme',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
