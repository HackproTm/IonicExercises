import { Component, Input, Output, OnInit, OnDestroy, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})

export class CountdownComponent implements OnInit, OnChanges, OnDestroy {
  @Input() init: number = null;
  public counter = 0;

  private countdownReference: any = null;

  @Output() onComplete = new EventEmitter<void>();
  @Output() onDecrease = new EventEmitter<number>();

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }

  ngOnChanges(changes): void {
    console.log('Init value update to: ', changes.init.currentValue);
    this.startCountdown();
  }

  constructor() { }

  private clearTimeout() {
    if (this.countdownReference) {
      clearTimeout(this.countdownReference);
      this.countdownReference = null;
    }
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownReference = setTimeout(() => {
        this.counter = this.counter - 1;
        this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    this.onDecrease.emit(this.counter);
    console.log('Count is ', this.counter);

    if (this.counter === 0) {
      this.onComplete.emit();
      console.log('--Counter End--');
    } else {
      this.doCountdown();
    }
  }
}
