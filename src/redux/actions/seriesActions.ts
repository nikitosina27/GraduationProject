export const FETCH_SERIES_REQUEST = 'FETCH_SERIES_REQUEST';
export const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';
export const FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE';

interface FetchSeriesRequestAction {
  type: typeof FETCH_SERIES_REQUEST;
}

interface FetchSeriesSuccessAction {
  type: typeof FETCH_SERIES_SUCCESS;
  payload: YourSeriesPayloadType; 
}

interface FetchSeriesFailureAction {
  type: typeof FETCH_SERIES_FAILURE;
  error: string; 
}

type YourSeriesPayloadType = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  };

export type SeriesActionTypes =
  | FetchSeriesRequestAction
  | FetchSeriesSuccessAction
  | FetchSeriesFailureAction;


export const fetchSeriesRequest = (): FetchSeriesRequestAction => ({
  type: FETCH_SERIES_REQUEST,
});

export const fetchSeriesSuccess = (data: YourSeriesPayloadType): FetchSeriesSuccessAction => ({
  type: FETCH_SERIES_SUCCESS,
  payload: data,
});

export const fetchSeriesFailure = (error: string): FetchSeriesFailureAction => ({
  type: FETCH_SERIES_FAILURE,
  error,
});