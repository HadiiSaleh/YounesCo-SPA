import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { User } from "../Interfaces/User";
import { BehaviorSubject, Observable, of } from "rxjs";
import { AdminPanelServiceService } from "../Service/AdminPanelService.service";
import { catchError, finalize } from "rxjs/operators";
import { PagedUsers } from "../Interfaces/PagedUsers";

export class UsersDataSource implements DataSource<User> {

    private usersSubject = new BehaviorSubject<User[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private usersPagedResultSubject = new BehaviorSubject<PagedUsers>(null);

    public loading$ = this.loadingSubject.asObservable();
    public usersPagedResult$ = this.usersPagedResultSubject.asObservable();

    constructor(private adminService: AdminPanelServiceService) { }

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
        this.usersPagedResultSubject.complete();
    }

    loadUsers(role: string, filter = '', sortDirection = 'asc', pageIndex = 1, pageSize = 5) {

        this.loadingSubject.next(true);

        this.adminService.getAllUsersPagedByRole(role, filter, sortDirection, pageIndex, pageSize).pipe(
            //catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(result => {
                this.usersSubject.next(result.results);
                this.usersPagedResultSubject.next(result);
            });
    }
}