import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

const routes: Routes = [
  { path: 'Template-driven-form', component: TemplateDrivenFormComponentComponent },
  { path: 'Reactive-Form', component: ReactiveFormComponent },
  { path: 'Form-Array', component: FormArrayComponent },
  { path: '', redirectTo: 'Template-driven-form' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
