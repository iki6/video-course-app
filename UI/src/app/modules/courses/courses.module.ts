import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CoursesRoutingModule } from "./courses-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { CoursesPageComponent } from "./pages/courses-page/courses-page.component";
import { CourseSearchComponent } from "./components/course-search/course-search.component";
import { CoursesListComponent } from "./components/courses-list/courses-list.component";
import { CoursesListItemComponent } from "./components/courses-list-item/courses-list-item.component";
import { HighlightElementDirective } from "./directives/highlight-element.directive";
import { MinutesConverterPipe } from "./pipes/minutes-converter.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { CoursesDataService } from "./services/courses-data.service";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

import { CourseDetailsPageComponent } from "./pages/course-details-page/course-details-page.component";
import { CourseFormComponent } from "./components/course-form/course-form.component";
import { StoreModule } from '@ngrx/store';
import * as fromCourses from '../../reducers/courses/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from '../../effects/courses.effects';
import { DateInputComponent } from 'src/app/shared/components/date-input/date-input.component';
import { NumberInputComponent } from 'src/app/shared/components/number-input/number-input.component';
import { AuthorsInputComponent } from './components/authors-input/authors-input.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseSearchComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    OrderByPipe,
    HighlightElementDirective,
    MinutesConverterPipe,
    CourseDetailsPageComponent,
    CourseFormComponent,
    DateInputComponent,
    NumberInputComponent,
    AuthorsInputComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromCourses.coursesFeatureKey, fromCourses.reducer),
    EffectsModule.forFeature([CoursesEffects])
  ],
  providers: [
    {
      provide: "CoursesDataService",
      useClass: CoursesDataService
    }
  ]
})
export class CoursesModule {}
