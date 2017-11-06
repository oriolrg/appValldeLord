import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost/';
    public ApiUrl = 'restaurant/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
