import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';

const routes: Routes = [
  { path: '',  redirectTo: 'menu-list', pathMatch: 'full' },
  { path: 'menu-list', component: MenuListComponent },
  { path: 'menu-item-details/:menuItemId', component: MenuItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
