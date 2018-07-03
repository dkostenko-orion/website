import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PrinciplesPageComponent } from './principles-page/principles-page.component';

export const routes: Routes = [
  {path: '', component: PageHomeComponent, children:
    [
      {path: '', component: PageHomeComponent}
    ]
  },
  {
    path: 'blog/:id',
    component: PageBlogComponent
  },
  {
    path: 'principles',
    component: PrinciplesPageComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
