import { TestBed, inject } from '@angular/core/testing';

import { MicrosoftExcelService } from './microsoft-excel.service';

describe('MicrosoftExcelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MicrosoftExcelService]
    });
  });

  it('should be created', inject([MicrosoftExcelService], (service: MicrosoftExcelService) => {
    expect(service).toBeTruthy();
  }));
});
