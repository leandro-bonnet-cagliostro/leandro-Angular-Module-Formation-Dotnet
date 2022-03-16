import { Component, OnInit } from '@angular/core';
import { DataUsersService, User } from 'src/app/services/data-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private userService: DataUsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.get().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  deleteUser(id: number | undefined) {
    if(id) {
      this.userService.delete(id).subscribe(_user => {
        console.log("C'est supprimé !");
        this.loadUsers();
      });
    }
  }

  deleteUserObject(user : User) {
    if(user) {
      this.userService.deleteObject(user).subscribe(_user => {
        console.log(`Objet user : ${user.username}`)
        console.log("C'est supprimé !");
        this.loadUsers();
      });
    }
  }

}
