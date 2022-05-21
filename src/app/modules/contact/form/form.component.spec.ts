import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { NotificationService } from 'src/app/shared/shared/services/notification.service';
import { ContactService } from '../contact.service';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const mockContactService = jasmine.createSpyObj("ContactService", ["contact"]);
  const espiaoNotificationService = jasmine.createSpyObj("NotificationService", ["showError", "showSuccess"])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ ReactiveFormsModule ],
      declarations: [ FormComponent ],
      providers: [
        {
          provide: ContactService,
          useValue: mockContactService
        },
        {
          provide: NotificationService,
          useValue: espiaoNotificationService
        }
      ]
    })
    .compileComponents();
    mockContactService.contact.and.returnValue(
      of("sucesso")
    );
    espiaoNotificationService.showError.and.returnValue()
    espiaoNotificationService.showSuccess.and.returnValue()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('teste função submit', ()=>{

    it('contato valido - chamada sucesso', ()=>{
      component.contact.controls.email.setValue('teste@gmail.com');
      component.contact.controls.message.setValue('message');
      component.submit();

      expect(espiaoNotificationService.showSuccess).toHaveBeenCalled();

    });

    it('contato valido - chamada sucesso', ()=>{
      mockContactService.contact.and.returnValue(
        throwError("erro")
      );
      component.contact.controls.email.setValue('teste@gmail.com');
      component.contact.controls.message.setValue('message');
      component.submit();

      expect(espiaoNotificationService.showError).toHaveBeenCalledWith("Putz!! Algo deu errado, mas verei isso em breve!!", "Algo deu Errado");

    });

    it('contato inválido', ()=>{
      component.submit();

      expect(espiaoNotificationService.showError).toHaveBeenCalledWith("Porra lindão, preenche tudo ai!", "Faltou algo hein!");

    });

  })


});
