import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfileDetailComponent } from "./profiles/profile-detail/profile-detail.component";
import { ProfilesListComponent } from "./profiles/profiles-list/profiles-list.component";

const APP_ROUTES: Routes = [
	{
		path: 'user/:name',
		component: ProfileDetailComponent
	},
	{
		path: '',
		component: ProfilesListComponent
	}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);