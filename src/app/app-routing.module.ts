import { AdminEmploisComponent } from './demo/ui-component/admin-emplois/admin-emplois.component';
// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'students',
        loadComponent: () => import('./demo/ui-component/students/students.component').then(m => m.StudentCrudComponent)
      },
      {
        path: 'professors',
        loadComponent: () => import('./demo/ui-component/professors/professors.component').then(m => m.ProfessorsComponent)
      },
      {
        path: 'admin-emplois',
        loadComponent: () => import('./demo/ui-component/admin-emplois/admin-emplois.component').then(m => m.AdminEmploisComponent)
      },
      {
        path: 'enseignant-emplois/:id',
        loadComponent: () => import('./demo/ui-component/enseignant-emplois/enseignant-emplois.component').then(m => m.EnseignantEmploisComponent)
      },
      {
        path: 'enseignant-absence/:id',
        loadComponent: () => import('./demo/ui-component/enseignant-absence/enseignant-absence.component').then(m => m.EnseignantAbsenceComponent)
      },
      {
        path: 'etudiant-emplois/:id',
        loadComponent: () => import('./demo/ui-component/etudiant-emplois/etudiant-emplois.component').then(m => m.EtudiantEmploisComponent)
      },
      {
        path: 'etudiant-absence/:id',
        loadComponent: () => import('./demo/ui-component/etudiant-absence/etudiant-absence.component').then(m => m.EtudiantAbsenceComponent)
      },
      {
        path: 'salles-emplois/:id',
        loadComponent: () => import('./demo/ui-component/salles-emplois/salles-emplois.component').then(m => m.SallesEmploisComponent)
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
