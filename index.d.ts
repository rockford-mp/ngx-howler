import { Howl as HowlClass, HowlOptions } from 'howler';
import { AsyncSubject, fromEvent, Observable } from 'rxjs';

export declare class NgxHowlerService {
    private loaded!: AsyncSubject<any>;
    private audio: Map<string, HowlClass>;

    constructor();

    loadScript(url: string): void;
    register(id: string, option: HowlOptions): Observable<any>;
    get(id: string): HowlClass;
    unregister(id: string): boolean;
}