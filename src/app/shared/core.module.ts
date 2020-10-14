import{ NgModule } from '@angular/core'

// Core Services

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Custom Services
import { StorageService } from 'core/services/storage.service'
import { AuthGuard } from 'core/guards/auth-guard'
import { RestApiService } from 'core/services/rest-api.service'
import { CustomvalidationService } from 'core/services/custom-validation.service'

//Interceptors

import { HttpErrorInterceptor } from 'core/interceptors/http-error.interceptor'

@NgModule({
    imports:[
        ToastrModule.forRoot()
    ],
    providers:[
        AuthGuard,
        StorageService,
        RestApiService,
        CustomvalidationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
          }
    ]
})

export class CoreModule 
{

    static forRoot()
    {
        return {
            ngModule:CoreModule
        }
    }

}