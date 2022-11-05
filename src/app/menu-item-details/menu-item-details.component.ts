import { Component, OnInit, OnDestroy   } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {
  menuItemId: number;
  data: any;
  selectedMenu: any;
  menuTitle: any;
  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private _location: Location
  ) {

  }

  ngOnInit() {
    this.menuItemId = parseInt(this.route.snapshot.paramMap.get('menuItemId'), 10);
    this.data = this.menuService.getDataInMemory();
    if (!this.data) {
     this.menuService.getData().pipe(take(1))
        .subscribe((result: any) => {
          result.MenuSections.forEach(element => {
            element.MenuItems.forEach(item => {
              if (item.MenuId === this.menuItemId) {
                this.menuTitle = item.Name;
                this.selectedMenu = item.MenuItemOptionSets;
              }
            });
          });
        });
    } else {
      this.data.forEach(element => {
        element.MenuItems.forEach(item => {
          if (item.MenuId === this.menuItemId) {
            this.menuTitle = item.Name;
            this.selectedMenu = item.MenuItemOptionSets;
          }
        });
      });
    }
  }
  backClicked() {
    this._location.back();
  }

}
