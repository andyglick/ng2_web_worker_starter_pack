import {platform} from "angular2/core";
import {
  WORKER_APP_PLATFORM,
  WORKER_APP_APPLICATION
} from "angular2/platform/worker_app";
import {MyApp} from "./component";

platform([WORKER_APP_PLATFORM])
.application([WORKER_APP_APPLICATION])
.bootstrap(MyApp);
