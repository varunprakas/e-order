import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuSelection:any;
  constructor(
    private menuService: MenuService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.menuService.getData().pipe(take(1))
    .subscribe((result: any) => {
    
      this.menuSelection = result.MenuSections;
      this.menuService.setDataInMemory(this.menuSelection)
     
    });
   
  }

  navigateToDetails(itemId) {
    this.router.navigate(['menu-item-details', itemId]);
  }
}
