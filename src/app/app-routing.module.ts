import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from '../app/answer/answer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'answer', component: AnswerComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
