import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { RecuperaContraComponent} from './recupera-contra/recupera-contra.component'; 
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'login'},
  {path: 'create-employee', component:EmployeeCreateComponent},
  {path: 'create-list', component:EmployeeListComponent},
  {path: 'create-edit/:id', component:EmployeeEditComponent},
  {path: 'login', component:LoginComponent},
  {path: 'recupera-contra', component:RecuperaContraComponent},
  {path: 'crear-estudiante', component:CrearEstudianteComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: '**', component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
