import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {AvatarModule} from 'primeng/avatar';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SidebarModule,
    ButtonModule,
    ListboxModule,
    MenubarModule,
    InputTextModule,
    OverlayPanelModule,
    AvatarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
