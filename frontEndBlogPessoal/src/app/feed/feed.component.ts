import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  constructor() { }

  public autoResize(e: any) {
    if (e.target.scrollHeight > e.target.offsetHeight) {
      e.target.rows += 1;
    }
  }

  ngOnInit(): void {
  }

}
