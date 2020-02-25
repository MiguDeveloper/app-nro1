import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {APP_ROUTING} from './app.routes';
import {FooterComponent} from './components/shared/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroesService} from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesSearchComponent } from './components/heroes-search/heroes-search.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { PipesComponent } from './components/pipes/pipes.component';
import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';

// Metodo para setear el idioma
registerLocaleData(localEs)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesSearchComponent,
    HeroeTarjetaComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
