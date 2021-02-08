import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {concatMap, filter, map, switchMap, take, tap, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links$: Observable<ScullyRoute[]>;


  constructor(private scully: ScullyRoutesService) {
    this.links$ = this.scully.available$.pipe(
      map(value => value.filter(
        value1 => value1.title)),
      tap(console.log)
    );
  }

  ngOnInit() {

  }
}

