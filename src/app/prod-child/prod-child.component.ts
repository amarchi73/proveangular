import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prod-child',
  templateUrl: './prod-child.component.html',
  styleUrls: ['./prod-child.component.css']
})
export class ProdChildComponent {
  @Input() nome;
  @Output() out = new EventEmitter();
  @Output() notify = new EventEmitter();
  segreto='ciao';

  constructor() { }

  ngOnInit(): void {

  }

}
