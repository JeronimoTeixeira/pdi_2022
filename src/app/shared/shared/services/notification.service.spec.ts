import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let value: String;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ToastrService,
          useValue: {
            success: ()=>{value = "success"},
            error: ()=>{value = "error"},
            info: ()=>{value = "info"},
            warning: ()=>{value = "warning"}
          }
        }
      ]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('teste de funções toaster', ()=>{

    it('showSuccess', ()=>{
      service.showSuccess("", "")
      expect(value).toEqual("success")
    })

    it('showError', ()=>{
      service.showError("", "")
      expect(value).toEqual("error")
    })

    it('showInfo', ()=>{
      service.showInfo("", "")
      expect(value).toEqual("info")
    })

    it('showWarning', ()=>{
      service.showWarning("", "")
      expect(value).toEqual("warning")
    })
  })
});
