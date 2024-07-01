import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Employee Management CRM';
  userName='';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
