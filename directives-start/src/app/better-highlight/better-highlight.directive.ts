import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
  }
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent'
  }
}
