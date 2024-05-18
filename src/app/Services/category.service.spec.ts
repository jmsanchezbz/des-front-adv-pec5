import { TestBed } from "@angular/core/testing";
import { CategoryService } from "./category.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CategoryDTO } from "../Models/category.dto";

const categoryAdd = {
    categoryId: "",
    userId: "edf0b16c-f07d-4532-9315-93725e155bba",
    css_color: "#aabbcc",
    description: "description",
    title: "title",
  }

const categoriesList: CategoryDTO[] = [
  {
    userId: "",
    categoryId: "1",
    css_color: "",
    description: "",
    title: "",
  },
  {
    userId: "",
    categoryId: "2",
    css_color: "",
    description: "",
    title: "",
  },
  {
    userId: "",
    categoryId: "3",
    css_color: "",
    description: "",
    title: "",
  },
];

describe("CategoryService", () => {
  let service: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should be creared", () => {
    expect(service).toBeTruthy();
  });

  it("GET method and getCategoriesByUserId return a list of categories", () => {
    service.getCategoriesByUserId("1").subscribe((resp: CategoryDTO[]) => {
      expect(resp).toEqual(categoriesList);
    });

    const req = httpMock.expectOne("http://localhost:3000/users/categories/1");

    expect(req.request.method).toBe("GET");

    req.flush(categoriesList);
  });

  /*it("GET method and createCategory return a category", () => {
    const { categoryId, ...expPartial } = categoryAdd;
    service.createCategory(categoryAdd).subscribe((resp: CategoryDTO) => {
        const { categoryId, ...partial } = resp;

      expect(categoryId).toBeTruthy();
      expect(partial).toEqual(expPartial);

    });

    const req = httpMock.expectOne("http://localhost:3000/users/categories");

    expect(req.request.method).toBe("POST");

    const mockCategoryResponse: CategoryDTO = {
        ...categoryAdd,
        categoryId: "newCategoryId"
    }

    req.flush(mockCategoryResponse);
  });*/
});
