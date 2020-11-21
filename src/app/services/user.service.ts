import { Injectable } from '@angular/core';
import { strict } from 'assert';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = new Array();

  constructor() {
    this.users.push({
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=640:*',
      name: 'Jonathan López',
      location: 'Tepic, Nay.',
      likeCount: 0,
      loveCount: 0,
      interest: [{description: 'Music', color: '#009900'},
                 {description:'Books',color:'#990099'},
                 {description:'cine',color:'#336666'},
                 {description:'Deportes',color:'#990000'},
                 {description:'Science',color:'#FF3300'},
                 {description:'Programming',color:'#010101'}]
    });

    this.users.push({
      image: 'https://i.pinimg.com/736x/69/b9/07/69b907b18171522809ce4b397d94c124.jpg',
      name: 'Irving Díaz',
      location: 'Puerto Vallarta, Jalisco.',
      likeCount: 0,
      loveCount: 0,
      interest: [{description:'Music',color:'#009900'}, 
                 {description:'cine',color:'#336666'},
                 {description:'Deportes',color:'#990000'},
                 {description:'Science',color:'#FF3300'},
                 {description:'Programming',color:'#010101'}]
    });

    this.users.push({
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LaTJ5zyqKMHadSNy2SQ_GQESMNoO_sWW8Q&usqp=CAU',
      name: 'Gabriel González',
      location: 'Compostela, Nay.',
      likeCount: 0,
      loveCount: 0,
      interest: [{description:'Music',color:'#009900'}, 
                 {description:'Books',color:'#990099'}]
    });
    this.users.push({
      image: 'https://akns-images.eonline.com/eol_images/Entire_Site/2020023/rs_600x600-200123145928-office1.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top',
      name: 'Martín Báez',
      location: 'Guasave, Sinaloa.',
      likeCount: 0,
      loveCount: 0,
      interest: [{description:'Music',color:'#009900'}, 
                 {description:'Deportes',color:'#990000'},
                 {description:'Science',color:'#FF3300'},
                 {description:'Programming',color:'#010101'}]
    });
    this.users.push({
      image: 'https://pbs.twimg.com/profile_images/2481217087/Darryl_400x400.jpg',
      name: 'Diego Levi',
      location: 'Puerto Vallarta, Jalisco.',
      likeCount: 0,
      loveCount: 0,
      interest: [{description:'Music',color:'#009900'}, 
                 {description:'Books',color:'#990099'}, 
                 {description:'cine',color:'#336666'},
                 {description:'Programming',color:'#010101'}]
    });
  }

  getUsers(): User[] {
    return this.users;
  }

  addLike(position: number): void{
    this.users[position].likeCount += 1;
  }
  addLove(position: number): void{
    this.users[position].loveCount += 1;
  }
  deleteUser(position: number): void{
    this.users.splice(position, 1);
  }
}
