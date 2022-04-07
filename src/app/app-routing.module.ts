import { DeleteProductComponent } from './cadastros/produtos/delete/delete.component';
import { UpdateProductComponent } from './cadastros/produtos/update/update.component';
import { CreateProductComponent } from './cadastros/produtos/create/create.component';
import { ListProductComponent } from './cadastros/produtos/list/list.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'cadastros',
    component: CadastrosComponent,
    children: [
      { path: 'produtos', component: ListProductComponent },
      { path: 'incluir', component: CreateProductComponent },
      { path: 'editar', component: UpdateProductComponent },
      { path: 'excluir', component: DeleteProductComponent },
    ],
  },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
