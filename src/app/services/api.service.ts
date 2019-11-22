import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SniffResult } from '../interfaces/sniff-result';
import { SniffLoading } from '../interfaces/sniff-loading';
import { SniffError } from '../interfaces/sniff-error';
import { CrawlUrlStatus } from '../interfaces/crawl-url-status';

import 'rxjs/add/operator/filter';
import config from '../config';
import { filter, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

/**
 * Service used for communicating with the backend server.
 * Note: we run WebSocket subscriptions outside Angular because of
 * https://christianliebel.com/2016/11/angular-2-protractor-timeout-heres-fix/
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // The URL to connect to.
  private url: string = config.apiServerUrl;
  private wsUrl: string = config.wsServerUrl;
  private socket: WebSocket;
  private socketMessages: Subject<{ type: string; payload: any }> = new Subject<{ type: string; payload: any }>();

  constructor(private http: HttpClient, private ngZone: NgZone) {
    console.log('hi');
    this.connectSocket();
  }


  /**
   * Send out an URL to start crawling at.
   * @param {string} url - The URL to crawl.
   * @param {string} standard - The accessibility standard to use.
   * @param {string} crawlDepth - How deep to crawl.
   */
  public sendUrl(url: string, standard: string, crawlDepth: string): void {
    this.sendMessage('crawl-url', {
      url: url,
      standard: standard,
      crawlDepth: crawlDepth
    });
  }

  /**  Observable that emits URLs that have been crawled. */
  public getCrawledUrls(): Observable<string> {
    return this.createObservableFromEventType('crawled-url');
  }

  /**
   * Observable that emits the results for a specific URL.
   * @param {string} url - The URL to filter results on.
   */
  public getSniffResults(url: string): Observable<SniffResult> {
    // Only get results for this specific URL.
    return this.getAllSniffResults().pipe(filter((result: SniffResult) => url === result.url));
  }

  /**
   * Retrieves the message info for a specific code.
   * @param {string} code - The code to get message info for.
   */
  public getMessageInfo(code: string): any {
    const standard = code.split('.')[0];
    // Used for translating message codes to actual messages.
    // Connects to an external HTMLCS.js javascript file.
    return (<any>window)['HTMLCS_' + standard].getMsgInfo(code);
  }

  /** Observable that emits all sniff results. */
  public getAllSniffResults(): Observable<SniffResult> {
    return this.createObservableFromEventType('sniff-result');
  }

  /**
   * Observable that emits the loading status for a specific URL.
   * @param {string} url - The URL to filter results on.
   */
  public getSniffLoading(url: string): Observable<SniffLoading> {
    return this.createObservableFromEventType('sniff-loading').pipe(
      filter((result: SniffLoading) => url === result.url)
    );
  }

  /**
   * Observable that emits the error status for a specific URL.
   * @param {string} url - The URL to filter results on.
   */
  public getSniffError(url: string): Observable<SniffError> {
    return this.createObservableFromEventType('sniff-error').pipe(filter((result: SniffError) => url === result.url));
  }

  /** Observable that emits where we are in the crawl (started/aborted/complete) */
  public crawlStatus(): Observable<CrawlUrlStatus> {
    return this.createObservableFromEventType('crawl-url-status');
  }

  /** Retrieves a list of standards. */
  public getStandards(): Observable<any> {
    return this.http.get(this.url + '/standards');
  }

  /** Aborts everything on the backend server for the current socket. */
  public abortAll(): void {
    this.sendMessage('abort', {});
  }

  private sendMessage(type: string, payload: any) {
    this.socket.send(JSON.stringify({type, payload}));
  }

  private createObservableFromEventType(type: string) {
    return this.socketMessages.pipe(
      filter(data => data.type === type),
      map(data => data.payload)
    );
  }


  private connectSocket(): void {
    this.ngZone.runOutsideAngular(() => {
      this.socket = new WebSocket(this.wsUrl);
      this.socket.onmessage = (event: MessageEvent) => {
        this.socketMessages.next(JSON.parse(event.data));
      };

      this.socket.onerror = (ev: Event) => {
        console.error('WebSocket error: ', ev);
        this.socket.close();
      };

      this.socket.onclose = ev => {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', ev);
        setTimeout(() => {
          this.connectSocket();
        }, 1000);
      };
    });
  }
}
