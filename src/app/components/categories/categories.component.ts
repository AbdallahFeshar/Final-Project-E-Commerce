import { Category } from 'src/app/core/interface/category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private _CategoriesService:CategoriesService ) {}

  categoryData: Category[] = [];
  catSpec :Category[]=[];
  flag:boolean =false ;

  ngOnInit(): void {
    this._CategoriesService.getcat().subscribe({
      next: (response) => {
        this.categoryData = response.data;
      },
    });
  }
  getCatSpec(id: string) {
    this._CategoriesService.getcatspec(id).subscribe({
      next: (response) => {
        console.log(response);
        this.catSpec = response.data;
        this.flag=true
      },
    });
  }

}
