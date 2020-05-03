import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../AdminPanel/Interfaces/Category';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // private baseUrlLogin = environment.apiUrl + '/login';

  private getAllCategoriesUrl = '../../assets/test/categories.json';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(this.getAllCategoriesUrl).pipe(
    map((response) => {
      // const selectedCategory = response.find(c => c.categorySlug === slug);
      // if(selectedCategory) {
      //   selectedCategory.isSelected = true;
      // }
      return response;
    })
  );
  }

  getCategoryBySlug(slug: string) {
    return this.http.get(this.getAllCategoriesUrl).pipe(
      map((response: Category[]) => {
        const category = response.filter(c => c.categorySlug === slug);
        return category;
      })
    );
  }
}
