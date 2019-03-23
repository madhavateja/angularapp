import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title='jspiderso';
  posts:any[]=[];
  url:string='https://jsonplaceholder.typicode.com/posts'
  // onSubmit(value:any){
  //   console.log(value);


  // }
    constructor(public http:HttpClient)
   
    {
       // 
    //  http.get<any>('https://api.github.com/users')
      http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
        console.log(res);
        this.posts=res;
      })
    }

    //----------------------------
    createData(input:HTMLInputElement)
    {
        const post={title:input.value}
        input.value=" ",
        this.http.post<any>(this.url,post).subscribe(res =>{
          this.posts['id']=res.id;
          this.posts.splice(0,0,post);
          console.log(res);
        })

    }

    removeData(post)
    {
      console.log(post);
      this.http.delete(`${this.url}/${post.id1}`).subscribe(res =>{
        let index=this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log(res);
      })
    }
  text='this is hello mhgnb sdhbhbvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvbfhbhbsdbjcdfbhfbhdsbhdbhs hdbhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
    }

