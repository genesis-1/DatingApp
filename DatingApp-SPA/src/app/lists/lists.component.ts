import { Component, OnInit } from '@angular/core';
import { Pagination, PaginatedResult } from '../_models/Pagination';
import { StringifyOptions } from 'querystring';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/User';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  users: User[];
  pagination: Pagination;
  likesParam: String;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private route: ActivatedRoute,
              private altertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data =>{
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });
    this.likesParam = 'Likers';
  }

  pageChanged(event: any) {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage,
      this.pagination.itemsPerPage, null, this.likesParam).subscribe((res: PaginatedResult<User[]> ) => {
      this.users = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.altertify.error(error);
    });
  }

}
