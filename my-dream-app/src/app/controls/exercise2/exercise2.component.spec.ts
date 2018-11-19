import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Exercise2Component } from './exercise2.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Exercise2Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Exercise2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-dream-app'`, () => {
    const fixture = TestBed.createComponent(Exercise2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-dream-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Exercise2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-dream-app!');
  });
});
