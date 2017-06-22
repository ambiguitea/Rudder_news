import { Component } from '@angular/core';

@Component({
  selector: 'new-newsitem',
  template: `
    <div class="newNews">
        <label>News:</label>
        <input id="news-text" type="text" />
        <input type="button" value="Save" />
        <input type="button" value="Discard" />
     </div>
  `,
  styles: [`
    .newNews {
        margin: 40px 2.5%;
        width: 95%;
    }
  
    #news-text, label, div {
        width: 100%;
    }   
    
    div {
        display: flex;
        flex-wrap: wrap;
    }
    
    #news-text {
        height: 200px;
    }
    

  `]
})

export class AppComponent  { }
