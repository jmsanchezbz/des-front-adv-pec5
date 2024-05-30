import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { ImageService } from "./services/image.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, SpinnerComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "pwa-app-pec5";

  isLoading: boolean = false;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getLoading().subscribe((data) => {
      this.isLoading = data;
    });
  }
}
