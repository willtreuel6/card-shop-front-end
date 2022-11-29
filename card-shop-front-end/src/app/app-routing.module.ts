import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminInventoryBoxesComponent } from './components/admin-inventory-boxes/admin-inventory-boxes.component';
import { AdminInventoryCardsComponent } from './components/admin-inventory-cards/admin-inventory-cards.component';
import { AdminInventoryComponent } from './components/admin-inventory/admin-inventory.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { BoxInventoryComponent } from './components/box-inventory/box-inventory.component';
import { CardInventoryComponent } from './components/card-inventory/card-inventory.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admininventory',
    component : AdminInventoryComponent
  },
  {
    path: 'admininventoryboxes',
    component: AdminInventoryBoxesComponent
  },
  {
    path: 'admininventorycards',
    component : AdminInventoryCardsComponent
  },
  {
    path : 'boxinventory',
    component : BoxInventoryComponent
  },
  {
    path : 'cardinventory',
    component : CardInventoryComponent
  },
  {
    path: 'contact',
    component : ContactComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
