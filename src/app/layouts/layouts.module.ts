import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { MatSidenavModule, MatIconModule, MatToolbarModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    EmptyLayoutComponent,
    AdminLayoutComponent,
    SidebarLayoutComponent
  ],
  imports: [CommonModule,RouterModule, MatSidenavModule, MatIconModule, MatToolbarModule]
})
export class LayoutsModule {}
