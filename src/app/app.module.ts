import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SobreComponent } from './sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Components
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { CreateProductComponent } from './cadastros/produtos/create/create.component';
import { DeleteProductComponent } from './cadastros/produtos/delete/delete.component';
import { ListProductComponent } from './cadastros/produtos/list/list.component';
import { UpdateProductComponent } from './cadastros/produtos/update/update.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    SobreComponent,
    CadastrosComponent,
    CreateProductComponent,
    DeleteProductComponent,
    ListProductComponent,
    UpdateProductComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
