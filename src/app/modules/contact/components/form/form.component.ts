import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/shared/services/notification.service';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loading = this.loadingService.loading;
  contact:FormGroup;
  constructor(public fb: FormBuilder,
    private contactService: ContactService,
    private notificationService: NotificationService,
    private loadingService: LoadingService) {
    this.contact = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    if(this.contact.valid){
      this.loadingService.show();
      this.contactService.contact(this.contact.getRawValue()).subscribe( response =>{
        this.loadingService.hide();
        this.notificationService.showSuccess("E-mail enviado com sucesso, em breve responderei!!", "Deu tudo certo");
      }, err => {
        this.loadingService.hide();
        this.notificationService.showError("Putz!! Algo deu errado, mas verei isso em breve!!", "Algo deu Errado");
      })
    }
    else{
      this.notificationService.showError("Porra lindão, preenche tudo ai!", "Faltou algo hein!");
    }
  }

}
