import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CharactersService } from './services/characters.service';
import { CharacterFilterPipe } from './shared/characters.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    CharacterFilterPipe,
  ],
  providers: [
    CharactersService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
