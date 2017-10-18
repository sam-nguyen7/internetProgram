import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { UserService } from './services/user.service'
import { appRoutes } from './routes'


@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot(appRoutes)
             ],
    declarations: [WebsitesAppComponent],
    providers: [ UserService ],
    bootstrap: [WebsitesAppComponent]
})

export class AppModule {

}