
import { Component } from '@angular/core';
import { ApiService } from './shared/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'fake-api-app';

constructor (private api: ApiService)
{

}
ngOnInit(){}
}

