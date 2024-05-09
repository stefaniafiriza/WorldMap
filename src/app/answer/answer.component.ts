import { Component, OnInit  } from '@angular/core';
import { GeojsonService } from '../geojson.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  geojsonData: any;
  nameRegex = /Q:/;

  constructor(
    private geojsonService: GeojsonService
  ){ }

  ngOnInit() {
    this.geojsonService.getGeojsonData().subscribe(data => {
      this.geojsonData = data.features;
    });
  }

  openIndices: number[] = [];

  toggleAnswer(index: number) {
    const isOpen = this.openIndices.includes(index);
    if (isOpen) {
      this.openIndices = this.openIndices.filter(i => i !== index);
    } else {
      this.openIndices.push(index);
    }
  }

  isAnswerOpen(index: number) {
    return this.openIndices.includes(index);
  }

  getToggleIcon(index: number) {
    return this.isAnswerOpen(index) ? '-' : '+';
  }
}
