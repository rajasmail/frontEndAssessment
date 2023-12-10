import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private articles = [
    { title: 'Article 1', content: 'This is the content of Article 1.' },
    { title: 'Article 2', content: 'Content for Article 2 goes here.' },
  ];

  getArticles(): any[] {
    return this.articles;
  }
}
