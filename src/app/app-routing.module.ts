import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyLayoutComponent } from "./layouts/empty-layout/empty-layout.component";
import { SidebarLayoutComponent } from "./layouts/sidebar-layout/sidebar-layout.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    component: EmptyLayoutComponent,
    children: [{ path: "", pathMatch: "full", component: TestComponent }]
  },
  {
    path: "admin",
    pathMatch: "prefix",
    component: AdminLayoutComponent,
    children: [{ path: "", pathMatch: "full", component: TestComponent }]
  },
  {
    path: "sidebar",
    pathMatch: "prefix",
    component: SidebarLayoutComponent,
    children: [{ path: "", pathMatch: "full", component: TestComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
