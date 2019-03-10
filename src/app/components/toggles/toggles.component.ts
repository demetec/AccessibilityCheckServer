import { Component, Output, OnInit, EventEmitter, NgZone } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ReinitService } from "../../services/reinit.service";
import { ImportExportService } from "../../services/import-export.service";
import { Toggle } from "../../interfaces/toggle";
import { ItemCodeUrlResult } from "../../interfaces/item-code-url-result";
import { ImportedData } from "../../interfaces/imported-data";

/** Component for the view error/warning/notice toggles */
@Component({
  selector: "app-toggles",
  templateUrl: "./toggles.component.html",
  styleUrls: ["./toggles.component.scss"]
})
export class TogglesComponent implements OnInit {
  /** The number of notices / errors / warnings. */
  numNotices: number = 0;
  numWarnings: number = 0;
  numErrors: number = 0;

  /** Whether to show the current component. */
  show: boolean = false;

  @Output("update")
  change: EventEmitter<Toggle> = new EventEmitter<Toggle>();

  constructor(
    private apiService: ApiService,
    private reinitService: ReinitService,
    private importExportService: ImportExportService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.apiService.getAllSniffResults().subscribe(data => {
        this.ngZone.run(() => {
          data.result.forEach(item => {
            // Show the component as soon as the first result comes in.
            if (!this.show) {
              this.show = true;
            }
            // Update number of errors/warnings/notices.
            this.updateCounts(item);
          });
        });
      });
    });

    this.reinitService.reinitializer$.subscribe(item => {
      this.init();
    });

    this.importExportService.doImport$.subscribe(data => {
      let importedData: ImportedData;
      try {
        importedData = JSON.parse(data);
      } catch (e) {
        return;
      }

      if (
        importedData.version === undefined ||
        importedData.sniffList === undefined
      ) {
        return;
      }

      this.init();
      this.show = true;
      const sniffList = importedData.sniffList;
      Object.keys(sniffList).forEach(code => {
        Object.keys(sniffList[code].items).forEach(url => {
          sniffList[code].items[url].forEach(item => {
            this.updateCounts(item);
          });
        });
      });
    });
  }

  /** Emit "toggle errors" event. */
  toggleErrors(event) {
    this.change.emit({ errors: event.checked });
  }

  /** Emit "toggle warnings" event. */
  toggleWarnings(event) {
    this.change.emit({ warnings: event.checked });
  }

  /** Emit "toggle notices" event. */
  toggleNotices(event) {
    this.change.emit({ notices: event.checked });
  }

  /** Called whenever we reinitialize. */
  private init(): void {
    // Reset state.
    this.numErrors = 0;
    this.numWarnings = 0;
    this.numNotices = 0;
    this.show = false;
  }

  /** Updates number of errors/warnings/notices. */
  private updateCounts(item: ItemCodeUrlResult): void {
    if (item.type === "error") {
      this.numErrors++;
    } else if (item.type === "warning") {
      this.numWarnings++;
    } else if (item.type === "notice") {
      this.numNotices++;
    }
  }
}
