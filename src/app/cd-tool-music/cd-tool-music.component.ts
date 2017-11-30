import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CdToolMusicService } from './cd-tool-music.service';

@Component({
  selector: 'cd-tool-music',
  templateUrl: './cd-tool-music.component.html',
  styleUrls: ['./cd-tool-music.component.scss'],
  providers: [CdToolMusicService]
})
export class CdToolMusicComponent implements OnInit {

  constructor(private cdToolMusicService: CdToolMusicService) { }

  ngOnInit() {
    this.cdToolMusicService.getAllAudios()
  }

}
