import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../../services/animals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [ ],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit{

  animal: any = [];

  id: string | null = null;

  constructor(private service: Animals , private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.service.getAnimalID(this.id!).subscribe( data =>{
      this.animal = data;
      console.log(this.animal)
    },  error => {
      console.log('Error: ' + error);
    })
  }

}
