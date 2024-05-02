
export const provideHowler = (): EnvironmentProviders => {
    const providers: Provider[] = [
      {
        provide: NgxHowlerService,
        useClass: NgxHowlerService
      }
    ];
  
    return makeEnvironmentProviders(providers);
};