import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-protfolio',
  imports: [],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent {
  srcs: string[] = [
    "/poert1.png",
    "/port2.png",
    "/port3.png",
    "/poert1.png",
    "/port2.png",
    "/port3.png"
  ];

  src: string = "";
  openLayer(imgSrc: string): void {
    document.getElementById("layerImg")?.classList.remove("d-none");
    this.src = imgSrc;
  }
  closeLayer(): void {
    document.getElementById("layerImg")?.classList.add("d-none");
  }
  x(e: any): void {
    e.stopPropagation();
  }
}
