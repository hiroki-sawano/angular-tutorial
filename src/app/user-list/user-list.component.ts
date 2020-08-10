import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.fetch().subscribe((data: any[])=>{
			console.log(data);
			this.users = data;
		})
  }
}
