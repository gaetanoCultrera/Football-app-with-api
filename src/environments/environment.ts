// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPointTopScorers:'https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=1c96eef0-6e48-11ec-bc71-e7e8c25f874a&season_id=',
  endpointScore:'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=1c96eef0-6e48-11ec-bc71-e7e8c25f874a&season_id=',
  endPointLiveScore:'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=1c96eef0-6e48-11ec-bc71-e7e8c25f874a&live=true&season_id=',
  endPointMatch:'https://www.scorebat.com/video-api/v3/',
  endPointNews:'https://newsdata.io/api/1/news?apikey=pub_371075b5b2fc1d69b93cffeee4b526f41e44'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
