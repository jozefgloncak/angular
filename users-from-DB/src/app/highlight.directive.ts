import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  @Input('appHighlight')
  highlightColor : string;

  constructor(private el: ElementRef) {
    this.highlight(this.highlightColor)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.highlightColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
