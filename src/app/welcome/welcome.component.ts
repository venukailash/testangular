import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message;
  welcomeMessage;
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.message = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response) {
    this.welcomeMessage = response.message;
  }
  handleErrorResponse(error) {
    this.welcomeMessage = error.error.message;
  }

  getWelcomeMessageWithParam() {
    this.service.executeHelloWorldBeanServiceWithName(this.message).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

}
