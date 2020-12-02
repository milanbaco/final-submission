import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent } from '../dashboard/dashboard.component'
import { HomeMenuComponent } from '../home-menu/home-menu.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo,} from '@angular/fire/auth-guard';
import { CreateComponent } from '../create/create.component';
import { ViewComponent } from '../view/view.component';
import { PastgamesComponent } from '../pastgames/pastgames.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

    export const routes: Routes = [
        {
            path: 'login',
            component: DashboardComponent,
        },
        {
            path: '',
            component: DashboardComponent,
        },

        {
          path: 'home',
          component: HomeMenuComponent,
          canActivate: [AngularFireAuthGuard],
          data: { authGuardPipe: redirectUnauthorizedToLogin },
        },
        {
            path: 'create',
            component: CreateComponent,
            canActivate: [AngularFireAuthGuard],
            data: { authGuardPipe: redirectUnauthorizedToLogin },
        },
        {
            path: 'view',
            component: ViewComponent,
            canActivate: [AngularFireAuthGuard],
            data: { authGuardPipe: redirectUnauthorizedToLogin },
          },

          {
            path: 'past',
            component: PastgamesComponent,
            canActivate: [AngularFireAuthGuard],
            data: { authGuardPipe: redirectUnauthorizedToLogin },
          },


    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
      })
      export class AppRoutingModule {}
