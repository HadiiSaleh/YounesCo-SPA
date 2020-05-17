import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from '../services/account.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from '../Services/product.service';

@Injectable({
    providedIn: 'root'
})


export class JwtInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService, private productService: ProductService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentuser = this.accountService.isLoggedIn;
        const token = localStorage.getItem('jwt');
        if (currentuser && token !== undefined) {
            request = request.clone({
                setHeaders:
                {
                    Authorization: `Bearer ${token}`

                }
            });

            if (!this.productService.uploadingImages) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }

        return next.handle(request).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {

                    const unothorizedError = error;
                    if (unothorizedError.status === 401) {
                        // if (unothorizedError.error != null) {
                            // console.log(unothorizedError);
                            return throwError('unauthorized');
                        // }
                    }

                    if (unothorizedError.status === 0) {
                        return throwError('Connection failed to the server');
                      }

                      if (unothorizedError.status === 500) {
                        return throwError('Server Error');
                      }

                    const applicationError = error.headers.get('Application-Error');

                    if (applicationError) {
                        return throwError(applicationError);
                    }

                    const serverError = error.error;
                    let modalStateErrors = '';

                    console.log(error);
                    if (serverError && serverError.errors && typeof serverError.errors === 'object') {
                        for (const key in serverError.errors) {
                            if (serverError.errors[key]) {
                                modalStateErrors += serverError.errors[key] + '\n';
                            }
                        }
                    }
                    return throwError(modalStateErrors || serverError || 'Server Error');
                } else {return throwError(error);}
            })
        );
    }
}

export const JwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
};
