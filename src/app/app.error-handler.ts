import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { NotificationService } from './shared/messages/notification.service';
import { LoginService } from './security/login/login.service';


@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private ns: NotificationService, private injector: Injector) {
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any) {

        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error.message
            switch (errorResponse.status) {
                case 401:
                    this.injector.get(LoginService).toIdentify()
                    break;

                case 403:
                    this.ns.notify(message || "Não autorizado.")
                    break;

                case 404:
                    this.ns.notify(message || "Recurso não encontrado. Verifique o console para mais detalhes")
                    break;

                default:
                    break;
            }
        }
        super.handleError(errorResponse)
    }
}
