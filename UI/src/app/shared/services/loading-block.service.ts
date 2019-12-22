import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoadingBlockService {
  currentProcessings = [];

  constructor() {}

  registerLoading(request) {
    this.currentProcessings.push(request);
  }

  registerLoadingCompleted(request, response) {
    this.currentProcessings = response.body
      ? this.currentProcessings.filter(p => p !== request)
      : this.currentProcessings;
  }

  hasCurrentProcessings() {
    return !!this.currentProcessings.length;
  }
}
