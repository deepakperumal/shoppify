import { Component, OnInit } from "@angular/core";
import { AuthService } from 'core/services/auth.service'
import { StorageService } from 'core/services/storage.service'
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { timer } from "rxjs"; // Works like timeout


@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html", 
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "red";
  currentUser:object;

  constructor(private auth:AuthService,private storageService:StorageService,private toastr: ToastrService,private router: Router) {}
  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {
    this.auth.getUser(this.storageService.getItem('userId')).subscribe(data=>{
      if (data["status"] === "success") {
        this.currentUser = data;
        console.log(this.currentUser)
      }
    },err=>{
      const time = timer(4000)
      this.notificationsService(err,'warning')
      time.subscribe((i) => {
        this.router.navigate(["auth/"]);
      });
    })
  }

  notificationsService(msg:string,status:string)
  {
    this.toastr.success(
      msg,
      "",
      {
        timeOut: 3000,    
        enableHtml: true,
        toastClass: `alert alert-${status} alert-with-icon`,
        positionClass: "toast-top-right",
      }
    );
  }
}
