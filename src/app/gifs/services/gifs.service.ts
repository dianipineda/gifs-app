import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { log } from 'console';

//const GIPHY_API_KEY = 'RS7BPNDslAJpOZL31gO95FnXFOPnsqTV'

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = JSON.parse(localStorage.getItem('history')!);
  private apiKey: string = 'RS7BPNDslAJpOZL31gO95FnXFOPnsqTV';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('GifsService ready');
  }

  //este spread se puso para que el arreglo original este seguro, pues el spread hace una copia de el, en caso de ser modificado se modificara la copia y no el original
  get TagsHistory(): string[] {
    if (this._tagsHistory == null) {
      localStorage.setItem('history', JSON.stringify([]));
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
      console.log('------------', this._tagsHistory);
      return this._tagsHistory;
    }
    console.log('------------', this._tagsHistory);
    return [...this._tagsHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  public loadLocalStorage(): void {
    if (localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.TagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(tag: string): void {
    if (tag.length === 0) {
      return;
    }
    this.organizeHistory(tag);
    //this._tagsHistory.unshift(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '5')
      .set('q', tag);
    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((res) => {
        console.log({ res: res });

        this.gifsList = res.data;
        console.log({ gifs: this.gifsList });
      });

    //console.log('el array es', this._tagsHistory);

    /*
    !el fetch no lo usare, pero funciona. se usaria anteponiendo a la funcion la clave async y el tipo de funcion Promise<void>
    fetch(
      'http://api.giphy.com/v1/gifs/search?api_key=RS7BPNDslAJpOZL31gO95FnXFOPnsqTV&q=valorant&limit=5'
    )
      .then((res) => res.json())
      .then((data) => console.log(data));*/
  }
}
