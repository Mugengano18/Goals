import { Directive, ElementRef,HostListener } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem: ElementRef) {}

  @HostListener("dbclick") onDoubleClicks(){
    this.textDeco("None")
  }

  
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  
  private textDeco(Action: string) {
    this.elem.nativeElement.style.textDecoration = Action;
  }

}
