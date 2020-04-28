import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule
    ],
    providers: [],
    // entryComponents:[AppComponent]
    bootstrap: [AppComponent]
})
export class AppModule { 

    constructor(private injector: Injector)
    {

    }
    ngDoBootstrap(){
        const el = createCustomElement(AppComponent,{injector:this.injector});
    // customElements.define('app-pcf-component', el) 
    }
}
