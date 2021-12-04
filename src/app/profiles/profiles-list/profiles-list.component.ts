import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {

  profiles: any;
  profile: any;
  thereAreResults: boolean = true;

  constructor(
    private profilesService: ProfilesService,
    private router: Router
  ) { }

  goToProfile(e: any, value: string) {
    this.profilesService.getUser(value)
      .subscribe(
        data => {
          this.profile = data;
          this.thereAreResults = true;
          this.router.navigate(['user', this.profile.login]);
        },
        error => this.thereAreResults = false
      );
  }
  
  ngOnInit(): void {
    this.profilesService.getUsers()
      .subscribe(data => this.profiles = data);
  }

}
