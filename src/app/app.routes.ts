import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";


//Arquivo de rotas da nossa aplicação, utilizamos a tipagem Routes do Angular
export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent}  //Mostrando o conteúdo da página about
];