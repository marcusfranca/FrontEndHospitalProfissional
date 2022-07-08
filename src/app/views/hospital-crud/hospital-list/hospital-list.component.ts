import { HospitalDTO } from './../../../model/dto/HospitalDTO';
import { Endereco } from './../../../model/Endereco';
import { Hospital } from './../../../model/Hospital';
import { HospitalService } from './../../../service/hospital.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss']
})
export class HospitalListComponent implements OnInit {
  hospitais: Hospital[] = []
  hospital!: Hospital;
  constructor(private service: HospitalService, private router: Router) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll(page = 0, size = 10) {
    this.service.get().subscribe(response => {
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
    this.service.deleteByid(hospital.id).subscribe(() => {
      this.listAll();
    })
  }
}
