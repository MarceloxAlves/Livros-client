import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.service';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { MeusLivrosComponent } from './meus-livros/meus-livros.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'minhas-compras',
      component: MinhasComprasComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'meus-livros',
      component: MeusLivrosComponent,
      canActivate: [AuthGuard],
    },
  {
      path: 'login',
      component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
