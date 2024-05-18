import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderComponent } from "./header.component";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";

class TemporalComponentForRoutes {}

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: "home",
            component: TemporalComponentForRoutes,
          },
          {
            path: "login",
            component: TemporalComponentForRoutes,
          },
          {
            path: "register",
            component: TemporalComponentForRoutes,
          },
          {
            path: "posts",
            component: TemporalComponentForRoutes,
          },
          {
            path: "categories",
            component: TemporalComponentForRoutes,
          },
          {
            path: "profile",
            component: TemporalComponentForRoutes,
          },
        ]),
      ],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    //instancia y pasa onInit
    fixture.detectChanges();
  });

  it("Should navigate to home", () => {
    const route = "home";
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigateByUrl");
    component.navigationTo(route);
    expect(spy).toHaveBeenCalledWith(route);
  });

  it("Should navigate to login", () => {
    const route = "login";
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigateByUrl");
    component.navigationTo(route);
    expect(spy).toHaveBeenCalledWith(route);
  });

  it("Should navigate to register", () => {
    const route = "register";
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigateByUrl");
    component.navigationTo(route);
    expect(spy).toHaveBeenCalledWith(route);
  });

  it("Should navigate to posts", () => {
    const route = "posts";
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigateByUrl");
    component.navigationTo(route);
    expect(spy).toHaveBeenCalledWith(route);
  });

  it("Should navigate to categories", () => {
    const route = "categories";
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigateByUrl");
    component.navigationTo(route);
    expect(spy).toHaveBeenCalledWith(route);
  });

  it("Should navigate to profile", () => {
    const route = "profile";
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigateByUrl");
    component.navigationTo(route);
    expect(spy).toHaveBeenCalledWith(route);
  });
});
