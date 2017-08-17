import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


class quote{
  update: false;
	text: string;
	author:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  updateText; 
  updateAuthor;
  newQuote:quote;
	editToggle = false;
	constructor(){
		this.newQuote = new quote();
	}
  comments  =[
      {update:false, text: 'first comment!', author: 'joe'},
      {update:false, text: 'nice work!', author: 'tim'},
      {update:false, text: 'I would also like to congratulate you!', author: 'steve'}
  ];



onSubmit(){
	if(this.newQuote){
		var entry = {
			'update': true,
      'text': this.newQuote.text,
			'author': this.newQuote.author
		};
		this.comments.push(entry)
	}
	
}

  onDelete(i) {
    if (confirm('Are you sure?')) {
      this.comments.splice(i, 1);
    }
  }

  onsubmit(i){
  	 if(this.updateText && this.updateAuthor){
    var entry = {
      'update': true,
      'text': this.updateText,
      'author': this.updateAuthor
    };
    this.comments.push(entry)
  }
}
}
