import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }  from './app-routing.module';
import { routes } from '../routes/routes';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { HomeComponent } from './components/home/home.component';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProductosModule } from './productos/productos.module';
import { MarcasModule } from './marcas/marcas.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';
import { PagosModule } from './pagos/pagos.module';
import { AgenciaPaqueteriaModule } from './agencia-paqueteria/agencia-paqueteria.module';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UsuariosModule,
    AppRoutingModule,
    //FontAwesomeModule,
    HttpClientModule,
    PedidosModule,
    ProductosModule,
    MarcasModule,
    TipoProductoModule,
    PagosModule,
    AgenciaPaqueteriaModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
