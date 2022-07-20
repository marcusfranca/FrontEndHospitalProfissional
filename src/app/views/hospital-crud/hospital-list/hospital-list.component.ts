
import { Hospital } from './../../../model/Hospital';
import { HospitalService } from './../../../service/hospital.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class HospitalListComponent implements OnInit {
  hospitais: Hospital[] = []
  hospital!: Hospital;
  constructor(private service: HospitalService, private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll(page = 0, size = 10) {
    this.service.getList().subscribe(response => {
      this.hospitais = response.content.map((hospital) => Hospital.fromDTO(hospital))
    })
  }

  navigatoToCreate() {
    this.router.navigateByUrl("hospitais/create")
  }
  editHospital(hospital: Hospital) {
    this.router.navigateByUrl(`hospitais/update/${hospital.id}`)
  }

  deleteHospital(hospital: Hospital) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + hospital.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByid(hospital.id!).subscribe(() => {
          this.listAll()
          this.messageService.add({ severity: 'success', summary: 'Bem-sucedido', detail: 'Hospital Deletado', life: 2000 })
        });
      }
    });
  }
}
