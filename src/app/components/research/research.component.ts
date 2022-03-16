import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  @Input('textResearchVal') textResearchVal!: string;
  @Output('textResearchValChanged') textReseachValChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  textResearch(textResearch: string) {
    // console.log("Le texte recherché est : "+textResearch);
    this.textResearchVal = textResearch;
    this.textReseachValChanged.emit(this.textResearchVal);
  }
}
