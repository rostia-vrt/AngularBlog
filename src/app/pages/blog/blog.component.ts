import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IBlog, IUser } from 'src/app/shared/interfaces/blog.interface';
import { Blog, User } from 'src/app/shared/classes/blog.model';
import { PassThrough } from 'stream';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild('closeModal', { static: false }) closeModal: ElementRef;
  @ViewChild('closeModal2', { static: false }) closeModal2: ElementRef;
  @ViewChild('closeModal3', { static: false }) closeModal3: ElementRef;

  arrBlogs: Array<IBlog>;
  id: number;
  title: string;
  text: string;
  author: string;

  Date = new Date();
  users: Array<IUser>;
  userId: number;
  userName: string = 'admin';
  userEmail: string;
  userPassword: string;
  checkInput1: boolean;
  checkInput2: boolean;
  showButton: boolean;
  editIndex: number;
  saveEdit: boolean;
  addPost: boolean;
  validationUser: boolean;
  constructor() {
    this.users = [];
    this.arrBlogs = [];
    console.log(this.arrBlogs);
    console.log(this.users);
  }

  ngOnInit() {
  }
  submitLogIn(index: number): void {
    if (this.userEmail === undefined || this.userPassword === undefined) {
      this.checkInput1 = true;
    }
    index = this.users[index].id ;
    if (this.userEmail === this.users[index].email) {

    }
    this.closeModal.nativeElement.click();
    // } else if (this.userEmail !== 'admin@gmail.com' || this.userPassword !== 'admin') {
    //   this.checkInput1 = false;
    //   this.checkInput2 = true;
    // } else if (this.userEmail === 'admin@gmail.com' || this.userPassword === 'admin') {
    //   this.showButton = true;
    //   this.author = this.userName;
    //   this.userEmail = '';
    //   this.userPassword = '';
    }
  addBlog(): void {
    const newBlog: IBlog = new Blog(1, this.title, this.text, this.author);
    if (this.arrBlogs.length > 1) {
      newBlog.id = this.arrBlogs.slice(-1)[0].id + 1;
    }
    this.arrBlogs.push(newBlog);
    this.title = '';
    this.text = '';
    this.closeModal3.nativeElement.click();
    console.log(this.arrBlogs);
  }
  addUser(): void {
    const newUser: IUser = new User(1, this.userName, this.userEmail, this.userPassword);
    if (this.users.length > 1) {
      newUser.id = this.users.slice(-1)[0].id + 1;
    }
    this.users.push(newUser);
    this.author = this.userName;
    this.showButton = true;
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';
    this.closeModal2.nativeElement.click();
    console.log(this.users);
  }
  edit(index: number): void {
    this.id = this.arrBlogs[index].id;
    this.title = this.arrBlogs[index].title;
    this.text = this.arrBlogs[index].text;
    this.editIndex = index;
    this.addPost = true;
    this.saveEdit = true;
  }
  saveEditBlog(): void {
    const newBlog: IBlog = new Blog(1, this.title, this.text, this.author);
    this.arrBlogs.splice(this.editIndex, 1, newBlog);
    this.title = '';
    this.text = '';
    this.saveEdit = false;
    this.closeModal3.nativeElement.click();
  }
  delete(index): void {
    this.arrBlogs.splice(index, 1);
  }
  logOut(): void {
    this.showButton = false;
    this.userName = 'admin';
  }
  signUp(): void {
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';
  }
}


