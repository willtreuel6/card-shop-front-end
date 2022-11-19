import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, PrimeIcons} from 'primeng/api';  
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AdminInventoryComponent } from './components/admin-inventory/admin-inventory.component';
import { AdminInventoryBoxesComponent } from './components/admin-inventory-boxes/admin-inventory-boxes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material';
 




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InventoryComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    AdminInventoryComponent,
    AdminInventoryBoxesComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
