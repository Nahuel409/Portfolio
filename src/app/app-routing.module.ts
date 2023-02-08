import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { SkillComponent } from './components/skill/skill.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';

const routes: Routes = [

  { path: '', redirectTo: '/notfound', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: SobremiComponent },
  { path: 'projects', component: ProyectoComponent},
  { path: 'skills', component: SkillComponent},
  { path: 'education', component: EducacionComponent},
  { path: 'contact', component: ContactoComponent},
  {path: 'notfound', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
