import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // { path: 'project', redirectTo: '/project', pathMatch: 'full', component:ProjectComponent},
  { path: 'login', component: AuthComponent },
  {
      path: 'project', component: LayoutComponent, children: [
      { path: 'project/:slug', component: TaskComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
  // { path: 'project', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
