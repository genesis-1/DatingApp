import { Injectable } from "@angular/core";
import * as alertify from "alertifyjs";

@Injectable({
  providedIn: "root"
})
export class AlertifyService {
  constructor() {}

  confirm(message: string, okcallback: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okcallback();
      } else {
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

  error(message: string) {
    alertify.error(message);
  }
}
