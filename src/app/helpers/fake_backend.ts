import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
  // configure fake backend
  backend.connections.subscribe((connection: MockConnection) => {
    let testUser = { username: 'mimi', password: '123456', token: 'fake-jwt-token' };

    // wrap in timeout to simulate server api call
    setTimeout(() => {

      // fake authenticate api end point
      if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
        // get parameters from post request
        let params = JSON.parse(connection.request.getBody());

        // check user credentials and return fake jwt token if valid
        if (params.username === testUser.username && params.password === testUser.password) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: { token: testUser.token } })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }
      if (connection.request.url.endsWith('/api/verify') && connection.request.method === RequestMethod.Post){
        let params = connection.request.getBody();
        if (params === testUser.token) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: { authorized: true } })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: {authorized: false } })
          ));
        }
      }

    }, 500);

  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
