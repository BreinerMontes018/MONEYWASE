import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { PhotoSelectorComponent } from './components/photo-selector/photo-selector.component';
import { FilterByTypePipe } from './pipes/filter-by-type-pipe';
import { FilterByCategoryPipe } from './pipes/filter-by-category-pipe';
import { SearchByTextPipe } from './pipes/search-by-text-pipe';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { ProgressBarCategoryComponent } from './components/progress-bar-category/progress-bar-category.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { AmountDisplayComponent } from './components/amount-display/amount-display.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [
    TransactionFormComponent,
    PhotoSelectorComponent,
    FilterBarComponent,
    FilterByTypePipe,
    FilterByCategoryPipe,
    SearchByTextPipe,
    DashboardCardComponent,
    ProgressBarCategoryComponent,
    TransactionItemComponent,
    AmountDisplayComponent,
    EmptyStateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,  
    TransactionFormComponent,
    PhotoSelectorComponent,
    FilterBarComponent,
    FilterByTypePipe,
    FilterByCategoryPipe,
    SearchByTextPipe,
    DashboardCardComponent,
    ProgressBarCategoryComponent,
    TransactionItemComponent,
    AmountDisplayComponent,
    EmptyStateComponent
  ]
})
export class SharedModule {}