import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DomSanitizer, DOCUMENT } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
@Component({
	selector: 'cd-toolbar',
	templateUrl: './cd-toolbar.component.html',
	styleUrls: ['./cd-toolbar.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CdToolbarComponent implements OnInit {

	isDarkTheme:boolean = false;
	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, @Inject(DOCUMENT) private document) {
		iconRegistry.addSvgIcon(
			'github-circle',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/svgIcons/github-circle-white-transparent.svg')
		)
	}

	ngOnInit() {
	}

	changeTheme($event){
		this.isDarkTheme = $event.checked;
		this.document.querySelector("body").classList.toggle("dark-theme");
	}

}
