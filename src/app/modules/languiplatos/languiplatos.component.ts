import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languiplatos',
  templateUrl: './languiplatos.component.html',
  styleUrl: './languiplatos.component.css',
  imports: [CommonModule],
})
export class LanguiplatosComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoPlayInterval: any;
  totalSlides = 7;
  visibleSlides = 3;
  maxSlide = this.totalSlides - this.visibleSlides;

  ngOnInit() {
    this.updateResponsive();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateResponsive();
  }

  updateResponsive() {
    if (window.innerWidth < 768) {
      this.visibleSlides = 1;
    } else {
      this.visibleSlides = 3;
    }
    this.maxSlide = this.totalSlides - this.visibleSlides;
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = 0;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = Math.min(index, this.maxSlide);
  }

  nextSlide() {
    this.currentSlide = this.currentSlide >= this.maxSlide ? 0 : this.currentSlide + 1;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide <= 0 ? this.maxSlide : this.currentSlide - 1;
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  onMouseEnter() {
    this.stopAutoPlay();
  }

  onMouseLeave() {
    this.startAutoPlay();
  }
}
