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
import { InventoryComponent } from './components/inventory/inventory.component';
import { AdminInventoryComponent } from './components/admin-inventory/admin-inventory.component';
import { AdminInventoryBoxesComponent } from './components/admin-inventory-boxes/admin-inventory-boxes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxInventoryComponent } from './components/box-inventory/box-inventory.component';
import { AdminInventoryCardsComponent } from './components/admin-inventory-cards/admin-inventory-cards.component';
import { AuthComponent } from './components/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardInventoryComponent } from './components/card-inventory/card-inventory.component';
import { AdminEmailComponent } from './components/admin-email/admin-email.component';
import { AdminControlsComponent } from './components/admin-controls/admin-controls.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { BoxdetailsComponent } from './components/boxdetails/boxdetails.component';
import { CarddetailsComponent } from './components/carddetails/carddetails.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';

//Prime imports
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, PrimeIcons} from 'primeng/api';  
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule, TableRadioButton } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { AvatarGroup, AvatarGroupModule } from 'primeng/avatargroup';
import {MultiSelectModule} from 'primeng/multiselect';
import { CarouselModule} from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextarea, InputTextareaModule} from 'primeng/inputtextarea';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

 




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
    AdminInventoryBoxesComponent,
    BoxInventoryComponent,
    AdminInventoryCardsComponent,
    AuthComponent,
    FooterComponent,
    CardInventoryComponent,
    AdminEmailComponent,
    AdminControlsComponent,
    SearchfilterPipe,
    BoxdetailsComponent,
    CarddetailsComponent,
    AdminheaderComponent



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
    MatGridListModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    DataViewModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    StyleClassModule,
    RippleModule,
    ReactiveFormsModule,
    CarouselModule,
    MultiSelectModule,
    AccordionModule,
    AvatarGroupModule,
    AvatarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
