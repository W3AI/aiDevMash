import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Store } from '@ngrx/store';

import { Task } from '../task.model';
import { ProjectService } from '../project.service';
import * as fromProject from '../project.reducer';

@Component({
  selector: 'app-past-project',
  templateUrl: './past-project.component.html',
  styleUrls: ['./past-project.component.css']
})
export class PastProjectComponent implements OnInit, AfterViewInit {
  // the displayedColumns array keeps the order of the columns on the screen mat-table
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Task>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private projectService: ProjectService, 
    private store: Store<fromProject.State>
  ) {}

  ngOnInit() {
    this.store.select(fromProject.getFinishedTasks).subscribe(
      (tasks: Task[]) => {
        this.dataSource.data = tasks;
      }
    );
    this.projectService.fetchCompletedOrCancelledTasks();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
