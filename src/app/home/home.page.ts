import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: User[] = new Array();
  search: string;
  constructor(private userService: UserService, private alert: AlertController) {
    this.getAll();
  }

  getAll(): void{
    this.users = this.userService.getUsers();
  }
  addLike(position: number){
  this.userService.addLike(position);
  }
  addLove(position: number){
  this.userService.addLove(position);
  }
  filter(): void{
    this.getAll();
    if (this.search && this.search.trim()){
      this.users = this.users.filter((user) => {
        return (user.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1 )
      });
    }
  }

  async showAlert(pos: number){
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas eliminar a este usuario?',
      buttons: [{text: 'No'},
      {text: 'Sí', handler: () => {
          this.userService.deleteUser(pos);
        }
      }]
    });
    await al.present();
  }


}
