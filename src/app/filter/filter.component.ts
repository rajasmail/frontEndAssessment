import { Component } from '@angular/core';
import { ArticleServiceService } from '../services/article.service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  // searchResults: any[] = [];

  // constructor(private articleService: ArticleServiceService) {}

  // search(term: string): void {
  //   this.searchResults = this.articleService
  //     .getArticles()
  //     .map((article) => this.findOccurrences(article, term));
  // }

  // findOccurrences(article: any, term: string): any {
  //   const content = article.content.toLowerCase();
  //   const lowerTerm = term.toLowerCase();

  //   let occurrences = 0;
  //   let currentIndex = content.indexOf(lowerTerm);

  //   while (currentIndex !== -1) {
  //     occurrences++;
  //     currentIndex = content.indexOf(lowerTerm, currentIndex + 1);
  //   }

  //   return {
  //     ...article,
  //     occurrences,
  //   };
  // }

  // highlightOccurrences(content: string, occurrences: number): string {
  //   let highlightedContent = content;
  //   let currentIndex = 0;

  //   for (let i = 0; i < occurrences; i++) {
  //     const index = content.indexOf('<span class="highlightText">', currentIndex);

  //     if (index === -1) {
  //       break;
  //     }

  //     currentIndex = index + '<span class="highlight">'.length;

  //     const endIndex = content.indexOf('</span>', currentIndex);

  //     if (endIndex === -1) {
  //       break;
  //     }

  //     highlightedContent =
  //       highlightedContent.substring(0, index) +
  //       highlightedContent.substring(currentIndex, endIndex) +
  //       highlightedContent.substring(endIndex + '</span>'.length);

  //     currentIndex = endIndex;
  //   }

  //   return highlightedContent;
  // }
  private content: string;
  public search!: string;

  public constructor() {
      this.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a quam ornare, bibendum ligula a, rhoncus ligula. Etiam aliquet, justo sollicitudin imperdiet luctus, nulla justo sodales mi, sit amet semper nisl velit vel massa. In hac habitasse platea dictumst.";
  }

  public highlight() {
      if(!this.search) {
          return this.content;
      }
      return this.content.replace(new RegExp(this.search, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
  }
}
