export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/login',
        icon: 'login',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/register',
        icon: 'profile',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'utilities',
    title: 'Actors',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'students',
        title: 'Students',
        type: 'item',
        classes: 'nav-item',
        url: '/students',
        icon: 'chrome'
      },
      {
        id: 'professor',
        title: 'Professors',
        type: 'item',
        classes: 'nav-item',
        url: '/professors',
        icon: 'chrome'
      },
    ]
  },

  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Admin Timetable',
        title: 'Admin Timetable',
        type: 'item',
        url: '/admin-emplois',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'Professor-Timetable',
        title: 'Professor-Timetable',
        type: 'item',
        url: '/enseignant-emplois/1',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'Professor-Absence',
        title: 'Professor-Absence',
        type: 'item',
        url: '/enseignant-absence/1',
        classes: 'nav-item',
        icon: 'chrome'
      },

      {
        id: 'Student-Timetable',
        title: 'Student-Timetable',
        type: 'item',
        url: '/etudiant-emplois/1',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'Student-Absence',
        title: 'Student-Absence',
        type: 'item',
        url: '/etudiant-absence/1',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'ClassRoom-Timetable',
        title: 'ClassRoom-Timetable',
        type: 'item',
        url: '/salles-emplois/1',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/mantis-angular/',
        icon: 'question',
        target: true,
        external: true
      }
    ]
  }
];
