import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import { validatorename } from './validator';

@Component({
  selector: 'app-chartform',
  templateUrl: './chartform.component.html',
  styleUrls: ['./chartform.component.scss']
})
export class ChartformComponent implements OnInit {
chartform!:FormGroup
ishild:boolean=false;
boxfirstvalue!:number;
boxsecondvalue!:number
  constructor() { }

  ngOnInit(): void {
    this.allchartform()
  }

  allchartform(){
    this.chartform=new FormGroup({
      firstvalue:new FormControl(null,  [validatorename.validatorevalue]),
      secondvalue:new FormControl(null, [validatorename.validatorevalue])

    })

  }

  onblur(eve:Event){
    let box=eve.target as HTMLInputElement;
    let getid=box.id;
    let val=+box.value;
    if(val <= 100){
      if(getid==='firstvalue'){
        this.chartform.patchValue({
          secondvalue:100 - val
        })
      }if(getid==='secondvalue'){
        this.chartform.patchValue({
          firstvalue:100 - val
        })
      }
    }
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ] ];
  public pieChartDatasets = [ {
        data: [ 300, 500, 100 ]
      } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];


  onsubmitt(){
    if(this.chartform.valid){
      this.ishild=true
      this.boxfirstvalue=+this.chartform.value.firstvalue,
      this.boxsecondvalue=+this.chartform.value.secondvalue
      this.pieChartDatasets = [ {
        data: [ this.boxfirstvalue, this.boxsecondvalue ]
      } ];
    }

  }
}
