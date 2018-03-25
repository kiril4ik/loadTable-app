import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-repeater',
    templateUrl: './repeater.component.html',
    styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Input() list: any;
    




}


