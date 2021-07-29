import { Component, OnInit } from '@angular/core';
import{ MotionService } from '../service/motion.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  x: number;
  y: number;
  z: number;
  constructor(public motionservice: MotionService) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
  }

  public async start(){
    this.getmotion();
    }

    getmotion()
    {
       this.motionservice.Cordenadasdevelocidad().then(()=>{
        this.x=this.motionservice.x;
        this.y=this.motionservice.y;
        this.z=this.motionservice.z;
      });
    }
}
