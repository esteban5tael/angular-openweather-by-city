import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-time',
  imports: [HeaderComponent, ReactiveFormsModule,  UpperCasePipe,DatePipe,DecimalPipe],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css',
})
export class TimeComponent implements OnInit {
  timeForm: FormGroup = new FormGroup({});
  weather!: any;
  apiError: boolean;
  date= new Date();

  constructor(
    private formBuilder: FormBuilder,
    private service: WeatherService
  ) {
    this.apiError = false;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.timeForm = this.formBuilder.group({
      city: new FormControl('Medellin', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z\s]*$/),
      ]) /* ----- */,
    });
  }

  getWeather(): void {
    try {
      this.weather = null;
      this.apiError = false;
      this?.service?.getWeather(this?.timeForm?.value?.city)?.subscribe({
        next: (data: Object) => {
          this.weather = data;
        },
        error: (error) => {
          this.apiError = true;
          console.error(error);
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleSubmit(): void {
    try {
      if (this.timeForm.invalid) return;

      this.getWeather();
    } catch (error) {
      console.error(error);
    }
  }
}
