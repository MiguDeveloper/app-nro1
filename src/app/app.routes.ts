import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {HeroesSearchComponent} from './components/heroes-search/heroes-search.component';
import {PipesComponent} from './components/pipes/pipes.component';
import {FormcontrolComponent} from './components/formcontrol/formcontrol.component';
import {SubirfileComponent} from './components/subirfile/subirfile.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'search/:termino', component: HeroesSearchComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'testform', component: FormcontrolComponent},
  {path: 'rse', component: SubirfileComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
