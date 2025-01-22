import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';

// Mock component to simulate routed components
@Component({ selector: 'app-login', template: '' })
class MockLoginComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: MockLoginComponent }, // Default route
        ]),
      ],
      declarations: [AppComponent, MockLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent); // Create the AppComponent test instance
    router = TestBed.inject(Router); // Inject the Router
    location = TestBed.inject(Location); // Inject Location for navigation checks
    router.initialNavigation(); // Initialize the router
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Verify the AppComponent is created
  });

  it('should display the default route (login page)', async () => {
    fixture.detectChanges(); // Trigger change detection to load the component
    await fixture.whenStable(); // Wait for async tasks to complete

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-login')).toBeTruthy(); // Verify the <app-login> is in the DOM
  });
});
