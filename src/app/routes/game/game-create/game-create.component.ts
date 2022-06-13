import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../../core/services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private gameService : GameService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [ Math.random().toString(36)],
      name: [null, [Validators.required]],
      bundle: [null, [Validators.pattern('^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$'), Validators.required]],
      owner: [null, [Validators.email, Validators.required]],
      image: [null]
    });
  }

  convertBase64(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async uploadImage(event: any) {
    const file = event.target.files[0];
    const base64 = await this.convertBase64(file);
    this.validateForm.get('image')?.setValue(base64);
    if (typeof base64 === "string") {
      (document.getElementById("avatar") as HTMLImageElement).src = base64;
    }
  };

  uploadFile(event: any) {
    this.uploadImage(event);
  }

  submitForm() {
    if (this.validateForm.valid) {
      this.gameService.createGame(this.validateForm)
      this.validateForm.reset();
      this.router.navigate(['/']);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
