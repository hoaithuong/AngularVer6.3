import { Component, OnInit } from '@angular/core';
import { MeasureSortingExampleComponent } from '../../components/measure-sorting-example/measure-sorting-example.component';
import  MeasureSortingExampleComponentSRC  from '!!raw-loader!../../components/measure-sorting-example/measure-sorting-example.component.ts';
import  MeasureSortingExampleComponentHTML  from '!!raw-loader!../../components/measure-sorting-example/measure-sorting-example.component.html';
import  MeasureSortingExampleComponentCSS  from '!!raw-loader!../../components/measure-sorting-example/measure-sorting-example.component.css';

import { AttributeSortingExampleComponent } from '../../components/attribute-sorting-example/attribute-sorting-example.component';
import  AttributeSortingExampleComponentSRC  from '!!raw-loader!../../components/attribute-sorting-example/attribute-sorting-example.component.ts';
import  AttributeSortingExampleComponentHTML  from '!!raw-loader!../../components/attribute-sorting-example/attribute-sorting-example.component.html';
import  AttributeSortingExampleComponentCSS  from '!!raw-loader!../../components/attribute-sorting-example/attribute-sorting-example.component.css';

import { DynamicSortingComponent } from '../../components/dynamic-sorting/dynamic-sorting.component';
import  DynamicSortingComponentSRC  from '!!raw-loader!../../components/dynamic-sorting/dynamic-sorting.component.ts';
import  DynamicSortingComponentHTML  from '!!raw-loader!../../components/dynamic-sorting/dynamic-sorting.component.html';
import  DynamicSortingComponentCSS  from '!!raw-loader!../../components/dynamic-sorting/dynamic-sorting.component.css';

@Component({
  selector: 'app-sorting-components',
  templateUrl: './sorting-components.component.html',
  styleUrls: ['./sorting-components.component.css']
})
export class SortingComponentsComponent implements OnInit {
  constructor() { }

  sortingComponentArray = [
    {
      title: 'Sorting by Measure',
      content: 'You can sort data by a measure value with the measureSortItem.',
      for: MeasureSortingExampleComponent,
      ts: MeasureSortingExampleComponentSRC,
      html: MeasureSortingExampleComponentHTML,
      css: MeasureSortingExampleComponentCSS
    },
    {
      title: 'Sorting by Attribute',
      content: 'You can sort data by an attribute value with the attributeSortItem property.',
      for: AttributeSortingExampleComponent,
      ts: AttributeSortingExampleComponentSRC,
      html: AttributeSortingExampleComponentHTML,
      css: AttributeSortingExampleComponentCSS
    },
    {
      title: 'Dynamic Sorting',
      content: `When sorting insights with multiple attributes in different dimensions by measure, specify an attributeSortItem with aggregation: 'sum' or  measureSortItem with an attributeLocator property. 
        Sorting by an attribute value works the same way as in the previous example.`,
      for: DynamicSortingComponent,
      ts: DynamicSortingComponentSRC,
      html: DynamicSortingComponentHTML,
      css: DynamicSortingComponentCSS
    }
  ]

  ngOnInit() {
  }
}
