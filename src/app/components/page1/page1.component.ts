import { ItemTopContainer } from './../../models/item-top-container.model';
import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

import { from } from 'rxjs';
import { ItemBottomContainer } from 'src/app/models/item-bottom-container.model';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

  coffeeCupLarge = '../../../assets/images/coffee-cup-L.png';
  coffeeCupMedium = '../../../assets/images/coffee-cup-M.png';
  soupPot = '../../../assets/images/soup-pot.png';
  saladBox = '../../../assets/images/salad-box.png';
  pastaBox = '../../../assets/images/pasta-box.png';

  selectedChart = 0;

  chartType: 'doughnut';
  chartWidth = 1;
  chartOptionsTop = {
    responsive: true,
    cutoutPercentage: 80,
    legend: { display: false },
    onClick: this.topChartClick,
  };

  chartOptionsBottom = {
    responsive: true,
    cutoutPercentage: 70,
    legend: { display: false },
    onClick: this.bottomChartClick,
  };

  topItems: Array<ItemTopContainer> = [
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: ['#5863C5', 'white'],
          },
        ],
        options: this.chartOptionsTop,
        lables: ['a', 'b'],
      },
      cupImage: this.coffeeCupLarge,
      cupModel: 'Large Cofee Cups',
      remainAmount: 200,
      totalAmount: 2000,
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: ['#5863C5', 'white'],
          },
        ],
        options: this.chartOptionsTop,
        lables: ['A', 'b'],
      },
      cupImage: this.coffeeCupMedium,
      cupModel: 'Medium Cofee Cups',
      remainAmount: 1500,
      totalAmount: 2100,
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: ['#5863C5', 'white'],
          },
        ],
        options: this.chartOptionsTop,
        lables: ['A', 'b'],
      },
      cupImage: this.soupPot,
      cupModel: 'Soup Pots',
      remainAmount: 500,
      totalAmount: 2100,
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: ['#5863C5', 'white'],
          },
        ],
        options: this.chartOptionsTop,
        lables: ['A', 'b'],
      },
      cupImage: this.saladBox,
      cupModel: 'Salad Boxes',
      remainAmount: 2000,
      totalAmount: 2100,
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: ['#5863C5', 'white', 'white'],
          },
        ],
        options: this.chartOptionsTop,
        lables: ['A', 'b'],
      },
      cupImage: this.pastaBox,
      cupModel: 'Pasta Boxes',
      remainAmount: 2000,
      totalAmount: 2000,
    },
  ];

  bottomItems1: Array<ItemBottomContainer> = [
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: [
              '#5863C5',
              'purple',
              '#00DCD2',
              'green',
              'orange',
              'white',
            ],
          },
        ],
        options: this.chartOptionsBottom,
        lables: ['A', 'b'],
      },
      LCC: 40,
      MCC: 50,
      SP: 5,
      SB: 10,
      PB: 0,
      space: 100,
      percentage: Math.round(100 - (100 / 205) * 100),
      binSize: 500,
      location: 'Entrance',
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: [
              '#5863C5',
              'purple',
              '#00DCD2',
              'green',
              'orange',
              'white',
            ],
          },
        ],
        options: this.chartOptionsBottom,
        lables: ['A', 'b'],
      },
      LCC: 100,
      MCC: 20,
      SP: 50,
      SB: 20,
      PB: 10,
      space: 100,
      percentage: Math.round(100 - (100 / 300) * 100),
      binSize: 500,
      location: 'Terrace',
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: [
              '#5863C5',
              'purple',
              '#00DCD2',
              'green',
              'orange',
              'white',
            ],
          },
        ],
        options: this.chartOptionsBottom,
        lables: ['A', 'b'],
      },
      LCC: 30,
      MCC: 10,
      SP: 5,
      SB: 0,
      PB: 0,
      space: 100,
      percentage: Math.round(100 - (100 / 145) * 100),
      binSize: 500,
      location: 'Cafetaria',
    },
  ];

  bottomItems2: Array<ItemBottomContainer> = [
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: [
              '#5863C5',
              'purple',
              '#00DCD2',
              'green',
              'orange',
              'white',
            ],
          },
        ],
        options: this.chartOptionsBottom,
        lables: ['A', 'b'],
      },
      LCC: 10,
      MCC: 100,
      SP: 2,
      SB: 10,
      PB: 0,
      space: 100,
      percentage: Math.round(100 - (100 / 222) * 100),
      binSize: 500,
      location: 'Kitchen',
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: [
              '#5863C5',
              'purple',
              '#00DCD2',
              'green',
              'orange',
              'white',
            ],
          },
        ],
        options: this.chartOptionsBottom,
        lables: ['A', 'b'],
      },
      LCC: 0,
      MCC: 20,
      SP: 200,
      SB: 20,
      PB: 10,
      space: 100,
      percentage: Math.round(100 - (100 / 350) * 100),
      binSize: 500,
      location: 'Washroom',
    },
    {
      chart: {
        data: [2000 - 200, 200],
        width: this.chartWidth,
        colors: [
          {
            backgroundColor: [
              '#5863C5',
              'purple',
              '#00DCD2',
              'green',
              'orange',
              'white',
            ],
          },
        ],
        options: this.chartOptionsBottom,
        lables: ['A', 'b'],
      },
      LCC: 50,
      MCC: 0,
      SP: 20,
      SB: 0,
      PB: 0,
      space: 100,
      percentage: Math.round(100 - (100 / 170) * 100),
      binSize: 500,
      location: 'Exit',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  topChartClick(event, array) {
    console.log('clicked on data index ', this.chart);
    const sold = this.chart.chart.config.data.datasets[0].data[0] as number;
    const remain = this.chart.chart.config.data.datasets[0].data[1] as number;

    if (remain > 100) {
      this.chart.chart.data.datasets[0].data = [sold + 100, remain - 100];
      this.chart.chart.update();
    }
  }

  bottomChartClick(event, array) {
    const clickedIndex = array[0]._index;
    const curAmount = this.chart.chart.config.data.datasets[0].data[
      clickedIndex
    ] as number;
    const leftSpace = this.chart.chart.config.data.datasets[0]
      .data[5] as number;

    if (leftSpace > 5) {
      this.chart.chart.data.datasets[0].data[5] = leftSpace - 5;
      this.chart.chart.data.datasets[0].data[clickedIndex] = curAmount + 5;
      this.chart.chart.update();
    }
  }

  tempClick1(i) {
    if (this.topItems[i].remainAmount > 100) {
      this.topItems[i].remainAmount = this.topItems[i].remainAmount - 100;
    }
  }

  tempClick2(i) {
    // chose the selected chart
    this.selectedChart = i;

    // identify selected chart row
    if (this.selectedChart < 3) {
      // process for first row

      // selected chart dataobject
      const selectedItem = this.bottomItems1[this.selectedChart];

      // current left space of bin
      const currentSpace = selectedItem.space;

      // check space is availale to fill another item
      if (currentSpace > 5) {
        // reduce space when add item to bin
        this.bottomItems1[this.selectedChart].space = currentSpace - 5;

        const total = (currentSpace / (100 - selectedItem.percentage)) * 100;

        // calculate the new bin percentage
        this.bottomItems1[this.selectedChart].percentage = Math.round(
          100 - ((currentSpace - 5) / total) * 100
        );
      }
    } else {
      // process for secound row
      const selectedItem = this.bottomItems2[this.selectedChart - 3];

      const currentSpace = selectedItem.space;

      if (currentSpace > 5) {
        this.bottomItems2[this.selectedChart - 3].space = currentSpace - 5;

        const total = (currentSpace / (100 - selectedItem.percentage)) * 100;

        this.bottomItems2[this.selectedChart - 3].percentage = Math.round(
          100 - ((currentSpace - 5) / total) * 100
        );
      }
    }
  }
}
